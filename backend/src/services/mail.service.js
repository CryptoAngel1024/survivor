const nodemailer = require('nodemailer')

String.prototype.format = function () {
  text = this;
  for (k in arguments[0]) {
    text = text.replace("{" + k + "}", arguments[0][k])
  }
  return text;
}

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 25,
  secure: false
});

function sendEmail(to, subject, templateHtml, placeHolder, cb) {
  try {
    let mail = {
      from: "Survivor <survivorfanta@gmail.com>",
      to: to,
      subject: subject,
      html: templateHtml.format(placeHolder)
    };
    transporter.sendMail(mail, function (err) {
      if (err) {
        console.log("Mail sent error " + err);
      } else {
        cb();
      }
    });
  } catch (err) {
    console.log(err)
  }
}


module.exports = {sendEmail}