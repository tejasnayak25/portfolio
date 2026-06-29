import { NextResponse } from "next/server";
import { Resend } from "resend";

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

    const resend = new Resend(process.env.RESEND_API_KEY);
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
<div style="background-color: #f3f4f6; padding: 24px 12px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; color: #000000; min-height: 100%;">
  <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border: 4px solid #000000; box-shadow: 6px 6px 0px #000000;">
    <!-- Title banner (Tactile yellow card header) -->
    <div style="background-color: #FFE05D; padding: 18px 20px; border-bottom: 4px solid #000000;">
      <div style="font-size: 11px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; color: #000000; margin-bottom: 4px;">
        TN // TRANSMISSION RECEIPT
      </div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.5px; font-family: system-ui, -apple-system, sans-serif; line-height: 1.1;">
        PORTFOLIO CONTACT
      </h1>
    </div>

    <!-- Data Payload Fields -->
    <div style="padding: 24px 20px; font-family: system-ui, -apple-system, sans-serif; text-align: left;">
      <!-- Row 1: Sender Name -->
      <div style="margin-bottom: 20px;">
        <div style="font-family: ui-monospace, monospace; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; color: #555555; margin-bottom: 6px;">
          [01 // SENDER NAME]
        </div>
        <div style="font-size: 15px; font-weight: 800; background-color: #f9fafb; border: 2px solid #000000; padding: 10px 14px; box-shadow: 2px 2px 0px #000000; color: #000000;">
          ${safeName}
        </div>
      </div>

      <!-- Row 2: Reply Email -->
      <div style="margin-bottom: 20px;">
        <div style="font-family: ui-monospace, monospace; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; color: #555555; margin-bottom: 6px;">
          [02 // REPLY EMAIL]
        </div>
        <div style="font-size: 15px; font-weight: 800; background-color: #f9fafb; border: 2px solid #000000; padding: 10px 14px; box-shadow: 2px 2px 0px #000000; word-break: break-all;">
          <a href="mailto:${safeEmail}" style="color: #6E4BFF; text-decoration: underline;">${safeEmail}</a>
        </div>
      </div>

      <!-- Row 3: Message Content -->
      <div style="margin-bottom: 10px;">
        <div style="font-family: ui-monospace, monospace; font-size: 10px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; color: #555555; margin-bottom: 6px;">
          [03 // MESSAGE PAYLOAD]
        </div>
        <div style="font-size: 14px; line-height: 1.6; font-weight: 500; background-color: #f9fafb; border: 2px solid #000000; padding: 16px; box-shadow: 3px 3px 0px #000000; word-wrap: break-word; color: #111827;">
          ${safeMessage}
        </div>
      </div>
    </div>

    <!-- Footer Status bar -->
    <div style="border-top: 4px solid #000000; padding: 12px 20px; background-color: #f9fafb; font-family: ui-monospace, monospace; font-size: 10px; font-weight: 900; color: #666666; text-align: left; text-transform: uppercase; letter-spacing: 1px;">
      STATUS: RECEIVED // SOURCE: <span style="color: #000000; font-weight: 900;">TEJASNAYAK.ME</span>
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
