import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      from: "Tejas Portfolio <contact@tejasnayak.me>",

      to: ["tejasnayak25@outlook.com"],

      subject: `📨 Portfolio Contact • ${name}`,

      replyTo: email,

      text: `
New Portfolio Contact

Name: ${name}
Email: ${email}

Message:

${message}
      `,

      html: `
<div style="font-family:Inter,'Segoe UI',Arial,sans-serif;background:#FFFDF4;padding:16px;color:#121212;">

  <div style="max-width:600px;margin:0 auto;border:3px solid #121212;background:#FFFDF4;">

    <div style="padding:16px 20px;border-bottom:3px solid #121212;text-align:left;">
      <div style="font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#6E4BFF;">
        TEJAS NAYAK &bull; PORTFOLIO
      </div>
      <h1 style="margin:8px 0 0;font-size:22px;font-weight:900;text-transform:uppercase;">
        New Message Received
      </h1>
    </div>

    <div style="padding:20px;">

      <div style="margin-bottom:16px;">
        <div style="font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#6E4BFF;margin-bottom:2px;">Sender</div>
        <div style="font-size:15px;font-weight:700;">${safeName}</div>
      </div>

      <div style="margin-bottom:16px;">
        <div style="font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#6E4BFF;margin-bottom:2px;">Reply To</div>
        <div style="font-size:15px;font-weight:700;word-break:break-all;">${safeEmail}</div>
      </div>

      <div style="margin-bottom:16px;">
        <div style="font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#6E4BFF;margin-bottom:6px;">Message</div>
        <div style="border-left:5px solid #6E4BFF;padding:14px 16px;background:#F8F6EF;line-height:1.6;font-size:14px;word-wrap:break-word;">
          ${safeMessage}
        </div>
      </div>

    </div>

    <div style="border-top:3px solid #121212;padding:14px 20px;font-size:11px;color:#888;text-align:left;">
      Generated automatically from <strong style="color:#121212;">tejasnayak.me</strong>
    </div>

  </div>

</div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
