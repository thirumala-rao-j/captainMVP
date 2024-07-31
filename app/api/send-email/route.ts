// app/api/send-email/route.ts
import { NextResponse } from "next/server";
const SibApiV3Sdk = require("sib-api-v3-typescript"); // Use `require` syntax

export async function POST(request: Request) {
  try {
    const { name, contact, message } = await request.json();

    if (!name || !contact || !message) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    // Initialize Brevo API client
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      throw new Error("API key is missing");
    }

    // Initialize API client and set API key
    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let apiKeyAuth = apiInstance.authentications["apiKey"];
    apiKeyAuth.apiKey = apiKey;

    // Prepare email details
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = "New Message from CaptainMVP";
    sendSmtpEmail.htmlContent = `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 100%;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin: 20px auto;
            max-width: 600px;
          }
          .header {
            text-align: center;
            padding: 20px;
            background-color: #007bff;
            color: #ffffff;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }
          .content {
            padding: 20px;
          }
          .content p {
            margin: 0 0 10px;
            line-height: 1.6;
          }
          .footer {
            text-align: center;
            padding: 20px;
            background-color: #f4f4f4;
            color: #666666;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Message from CaptainMVP</h1>
          </div>
          <div class="content">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Neonflake Enterprises (OPC) Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    sendSmtpEmail.sender = {
      name: "CaptainMVP",
      email: process.env.BREVO_SENDER_EMAIL,
    };
    sendSmtpEmail.to = [
      { email: "thirumala.juvvisetti@gmail.com", name: "Ayyappa" },
      { email: "thirumalakumar01@gmail.com", name: "Maha Lakshmi" },
    ];

    // Send email
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully:", JSON.stringify(data));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
