import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  message: string;
  pageUrl?: string;
  honeypot?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatDate(d: Date): string {
  return d.toLocaleString("en-GB", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }) + " (ICT, UTC+7)";
}

function buildHtmlEmail(data: ContactPayload, submittedAt: string): string {
  const row = (label: string, value: string | undefined, highlight = false) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;font-size:13px;color:#94A3B8;white-space:nowrap;vertical-align:top;width:140px;">${label}</td>
          <td style="padding:10px 16px;font-size:13px;color:${highlight ? "#38BDF8" : "#F8FAFC"};word-break:break-word;">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#050B18;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050B18;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0A1525 0%,#0D1A2E 100%);border-radius:12px 12px 0 0;padding:28px 32px;border-bottom:1px solid #1A2535;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:4px;height:28px;background:#38BDF8;border-radius:2px;"></div>
              <div>
                <p style="margin:0;font-size:11px;color:#38BDF8;text-transform:uppercase;letter-spacing:0.15em;font-weight:600;">New Contact Form Submission</p>
                <h1 style="margin:4px 0 0;font-size:20px;color:#F8FAFC;font-weight:700;">chonvarin.com</h1>
              </div>
            </div>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="background:#0A1020;padding:0;border-left:1px solid #1A2535;border-right:1px solid #1A2535;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${row("Name", data.name, true)}
              <tr><td colspan="2" style="height:1px;background:#1A2535;padding:0;"></td></tr>
              ${row("Email", `<a href="mailto:${data.email}" style="color:#38BDF8;text-decoration:none;">${data.email}</a>`)}
              <tr><td colspan="2" style="height:1px;background:#1A2535;padding:0;"></td></tr>
              ${data.phone ? row("Phone", data.phone) + '<tr><td colspan="2" style="height:1px;background:#1A2535;padding:0;"></td></tr>' : ""}
              ${data.company ? row("Company", data.company) + '<tr><td colspan="2" style="height:1px;background:#1A2535;padding:0;"></td></tr>' : ""}
              ${data.projectType ? row("Project Type", data.projectType) + '<tr><td colspan="2" style="height:1px;background:#1A2535;padding:0;"></td></tr>' : ""}
            </table>
          </td>
        </tr>
        <!-- Message -->
        <tr>
          <td style="background:#0D1625;padding:20px 32px;border:1px solid #1A2535;border-top:none;">
            <p style="margin:0 0 10px;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">Message</p>
            <p style="margin:0;font-size:14px;color:#CBD5E1;line-height:1.75;white-space:pre-wrap;">${data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </td>
        </tr>
        <!-- Meta -->
        <tr>
          <td style="background:#070E1C;padding:16px 32px;border-radius:0 0 12px 12px;border:1px solid #1A2535;border-top:1px solid #0F1C2E;">
            <p style="margin:0;font-size:11px;color:#475569;">Submitted: ${submittedAt}</p>
            ${data.pageUrl ? `<p style="margin:4px 0 0;font-size:11px;color:#475569;">Page: <a href="${data.pageUrl}" style="color:#38BDF8;text-decoration:none;">${data.pageUrl}</a></p>` : ""}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildTextEmail(data: ContactPayload, submittedAt: string): string {
  return [
    "NEW CONTACT FORM SUBMISSION — chonvarin.com",
    "=".repeat(48),
    `Name:         ${data.name}`,
    `Email:        ${data.email}`,
    data.phone ? `Phone:        ${data.phone}` : null,
    data.company ? `Company:      ${data.company}` : null,
    data.projectType ? `Project Type: ${data.projectType}` : null,
    "-".repeat(48),
    "Message:",
    data.message,
    "-".repeat(48),
    `Submitted:    ${submittedAt}`,
    data.pageUrl ? `Page:         ${data.pageUrl}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body: ContactPayload = await req.json();

    // Honeypot — bot filled the hidden field, reject silently
    if (body.honeypot) {
      return new Response(
        JSON.stringify({ ok: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Server-side validation
    const errors: Record<string, string> = {};
    if (!body.name?.trim()) errors.name = "Name is required.";
    if (!body.email?.trim()) errors.email = "Email is required.";
    else if (!isValidEmail(body.email.trim())) errors.email = "Please enter a valid email address.";
    if (!body.message?.trim()) errors.message = "Message is required.";

    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({ error: "Validation failed.", fields: errors }),
        { status: 422, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const submittedAt = formatDate(new Date());

    const emailPayload = {
      from: "Contact Form <contact@chonvarin.com>",
      to: ["me@chonvarin.com", "neonextechnologies@gmail.com"],
      reply_to: body.email.trim(),
      subject: `[chonvarin.com] New message from ${body.name.trim()}${body.projectType ? ` — ${body.projectType}` : ""}`,
      html: buildHtmlEmail(body, submittedAt),
      text: buildTextEmail(body, submittedAt),
    };

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      console.error("Resend error:", resendRes.status, detail);
      return new Response(
        JSON.stringify({ error: "Failed to send email. Please try again or contact directly via email." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
