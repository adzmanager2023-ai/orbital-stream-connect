import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();

          const {
            name,
            company,
            email,
            phone,
            service,
            message,
          } = body;

          // Required fields
          if (!name || !email || !service) {
            return Response.json(
              {
                success: false,
                message: "Please complete all required fields.",
              },
              { status: 400 },
            );
          }

          // Get Resend API key from Wasmer Environment Variables
          const resendApiKey = process.env['RESEND_API_KEY'];

          if (!resendApiKey) {
            console.error("RESEND_API_KEY is not configured.");

            return Response.json(
              {
                success: false,
                message: "Email service is not configured.",
              },
              { status: 500 },
            );
          }

          // Clean input
          const safeName = String(name).trim();
          const safeCompany = String(company || "").trim();
          const safeEmail = String(email).trim();
          const safePhone = String(phone || "").trim();
          const safeService = String(service).trim();
          const safeMessage = String(message || "").trim();

          // Basic email validation
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!emailPattern.test(safeEmail)) {
            return Response.json(
              {
                success: false,
                message: "Please enter a valid email address.",
              },
              { status: 400 },
            );
          }

          // Email HTML
          const emailHtml = `
            <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f7fb;padding:30px;">
              
              <div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
                
                <!-- Header -->
                <div style="background:#071a3d;padding:28px 30px;">
                  <h1 style="margin:0;color:#ffffff;font-size:24px;">
                    New Customer Enquiry
                  </h1>

                  <p style="margin:8px 0 0;color:#b9c7df;font-size:14px;">
                    MSL Colombo Website
                  </p>
                </div>

                <!-- Content -->
                <div style="padding:30px;">

                  <h2 style="margin:0 0 20px;color:#071a3d;font-size:18px;">
                    Customer Details
                  </h2>

                  <table style="width:100%;border-collapse:collapse;font-size:14px;">
                    
                    <tr>
                      <td style="padding:10px 0;font-weight:bold;color:#555;width:150px;">
                        Name
                      </td>
                      <td style="padding:10px 0;color:#222;">
                        ${escapeHtml(safeName)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:10px 0;font-weight:bold;color:#555;">
                        Company
                      </td>
                      <td style="padding:10px 0;color:#222;">
                        ${escapeHtml(safeCompany || "Not provided")}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:10px 0;font-weight:bold;color:#555;">
                        Email
                      </td>
                      <td style="padding:10px 0;color:#222;">
                        ${escapeHtml(safeEmail)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:10px 0;font-weight:bold;color:#555;">
                        Phone
                      </td>
                      <td style="padding:10px 0;color:#222;">
                        ${escapeHtml(safePhone || "Not provided")}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:10px 0;font-weight:bold;color:#555;">
                        Service Required
                      </td>
                      <td style="padding:10px 0;color:#222;">
                        ${escapeHtml(safeService)}
                      </td>
                    </tr>

                  </table>

                  <!-- Message -->
                  <div style="margin-top:28px;">
                    
                    <h3 style="margin:0 0 10px;color:#071a3d;font-size:16px;">
                      Customer Message
                    </h3>

                    <div style="background:#f7f9fc;border-left:4px solid #2563eb;padding:18px;color:#333;line-height:1.6;white-space:pre-wrap;">
                      ${escapeHtml(safeMessage || "No message provided.")}
                    </div>

                  </div>

                  <!-- Footer -->
                  <div style="margin-top:30px;padding-top:20px;border-top:1px solid #e5e7eb;color:#777;font-size:12px;">
                    This enquiry was submitted through the MSL Colombo website.
                  </div>

                </div>
              </div>
            </div>
          `;

          // Send email through Resend
          const resendResponse = await fetch(
            "https://api.resend.com/emails",
            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendApiKey}`,
              },

              body: JSON.stringify({
                from: "MSL Colombo Website <info@mslcolombo.com>",
                to: ["info@mslcolombo.com"],
                reply_to: safeEmail,
                subject: `New MSL Colombo Enquiry — ${safeService}`,
                html: emailHtml,
              }),
            },
          );

          const resendData = await resendResponse.json();

          // Resend returned an error
          if (!resendResponse.ok) {
            console.error("Resend error:", resendData);

            return Response.json(
              {
                success: false,
                message:
                  "Unable to send your enquiry. Please try again.",
              },
              { status: 500 },
            );
          }

          // Success
          return Response.json({
            success: true,
            message: "Your enquiry has been sent successfully.",
          });

        } catch (error) {
          console.error("Contact form error:", error);

          return Response.json(
            {
              success: false,
              message: "Something went wrong. Please try again.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});

/**
 * Prevent customer-entered HTML from being inserted
 * directly into the email template.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
