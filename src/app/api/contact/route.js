import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Email configuration is currently unavailable." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Tejas Portfolio <onboarding@resend.dev>",
      to: "tejasnayak25@outlook.com",
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; color: #121212;">
          <h2 style="border-bottom: 2px solid #000; padding-bottom: 10px; text-transform: uppercase; font-weight: 900;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #6E4BFF; font-size: 14px; white-space: pre-wrap;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return NextResponse.json(
        { error: data.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact Form Route Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
