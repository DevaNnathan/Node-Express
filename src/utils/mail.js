const nodemailer = require("nodemailer");

const sendEmail = async (to,otp) => {
  try {
    // Create transpor
    // ter (Use environment variables for security) 

    const subject = "demo"
    const htmlContent = ` Your Verfication code is  ${otp}`
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "marison399@gmail.com", // your email
        pass: "wewa dttp folm rmpj", // app password
      },
      tls: {
        rejectUnauthorized: false  // FORCE ACCEPT
    }
    });

    // Email options
    const mailOptions = {
      from: "Your App Name",
      to,
      subject,
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Email send failed:", error);
    throw error;
  }
};

module.exports = sendEmail;