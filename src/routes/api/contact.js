
import nodemailer from "nodemailer";

export default async function handler(req, res) {

  const {name, email, message} = req.body;


  const transporter = nodemailer.createTransport({

    host: process.env.SMTP_HOST,

    port: 587,

    secure:false,

    auth:{
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }

  });


  await transporter.sendMail({

    from: process.env.FROM_EMAIL,

    to: process.env.TO_EMAIL,

    subject:"New Website Enquiry",

    html:`

    <h2>New Contact Form</h2>

    <p><b>Name:</b> ${name}</p>

    <p><b>Email:</b> ${email}</p>

    <p><b>Message:</b></p>

    <p>${message}</p>

    `

  });


  res.json({
    success:true
  });

}
