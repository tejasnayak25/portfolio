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

      reply_to: email,

      text: `
New Portfolio Contact

Name: ${name}
Email: ${email}

Message:

${message}
      `,

      html: `
<div style="font-family:Inter,Segoe UI,Arial,sans-serif;background:#FFFDF4;padding:32px;color:#121212;">

  <div style="max-width:640px;margin:auto;border:3px solid #121212;background:#FFFDF4;">

    <div style="padding:24px;border-bottom:3px solid #121212;">
      <div style="font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#6E4BFF;">
        TEJAS NAYAK
      </div>

      <h1 style="margin:10px 0 0;font-size:28px;font-weight:900;">
        NEW PORTFOLIO MESSAGE
      </h1>
    </div>

    <div style="padding:24px;">

      <p style="margin:0 0 14px;">
        <strong>Name</strong><br>
        ${safeName}
      </p>

      <p style="margin:0 0 14px;">
        <strong>Email</strong><br>
        ${safeEmail}
      </p>

      <p style="margin:0 0 8px;">
        <strong>Message</strong>
      </p>

      <div
        style="
          border-left:6px solid #6E4BFF;
          padding:18px;
          background:#F8F6EF;
          line-height:1.7;
          white-space:pre-wrap;
        "
      >
        ${safeMessage}
      </div>

    </div>

    <div
      style="
        border-top:3px solid #121212;
        padding:18px 24px;
        font-size:12px;
        color:#666;
      "
    >
      Generated automatically from
      <strong>tejasnayak.me</strong>
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
