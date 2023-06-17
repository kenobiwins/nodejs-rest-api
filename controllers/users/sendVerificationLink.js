const { sendEmail } = require("../../services");

const { BASE_URL, PORT } = process.env;

async function sendVerificationLink(email, token) {
  const verificationLink = `${BASE_URL + ":" + PORT}/api/users/verify/${token}`;
  const message = {
    recieverEmail: email,
    topic: "Verification code",
    messageText: `Please complete your verification by following this link: ${verificationLink}`,
    messageMarkup: `Please complete your verification by following this link: <a href=${verificationLink}>${verificationLink}</a>`,
  };

  await sendEmail(message);
}

module.exports = sendVerificationLink;
