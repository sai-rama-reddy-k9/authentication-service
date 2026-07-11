const {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} = require("../templates/mail.templates");
const transporter = require("../../config/mail");

const sendVerificationEmail = async (email, verificationToken) => {
  try {
    await transporter.sendMail({
      from: `"Auth Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken,
      ),
    });

    console.log("Verification email sent");
  } catch (error) {
    console.log(error);
  }
};

const sendWelcomeEmail = async (email, name) => {
  try {
    await transporter.sendMail({
      from: `"Auth Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Welcome ${name}!`,
      html: `<h1>Welcome ${name}</h1>
         <p>Thanks for registering.</p>`,
    });

    console.log("Welcome email sent successfully");
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Error sending welcome email: ${error}`);
  }
};

const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    await transporter.sendMail({
      from: `"Auth Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Reset Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });
    console.log("Reset email sent");
  } catch (error) {
    console.error(`Error sending password reset email`, error);

    throw new Error(`Error sending password reset email: ${error}`);
  }
};

const sendResetSuccessEmail = async (email) => {
  try {
    await transporter.sendMail({
      from: `"Auth Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Successful Password Reset",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
    console.log("Reset email success mail sent.");
  } catch (error) {
    console.error(`Error sending password reset success email`, error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendResetSuccessEmail,
};
