// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Create a transporter object using SMTP or a service like Gmail
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address (use environment variables)
        pass: process.env.EMAIL_PASS, // Your email password (use environment variables)
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'your-email@example.com', // Your email address
        subject: 'New User Request to Get Listed',
        text: `User email: ${email}`, // Plain text body
      });

      // Send success response
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
