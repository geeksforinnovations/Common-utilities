const AWS = require("aws-sdk");
const ses = new AWS.SES();
const appSettingsService = require('../../services/appSettings.service')

async function send(from, to, subject, body) {
  try {
    const request = getMailRequest(from, to, subject, body);
    console.log('eail req', request)
    return await ses.sendEmail(request).promise();
  } catch (error) {
    console.log('sending email error,', error)
  }

};

function getMailRequest(from, to, subject, body) {
  return {
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: "UTF-8"
      },
      Body: {
        Text: {
          Data: body,
          Charset: "UTF-8"
        }
      }
    },
    Source: from
  };
}

function getEmaildetails() {
  return process.env.FROM_EMAIL// 'kumarkvm070@gmail.com'// await appSettingsService.getSettingByKey('emailFrom')
}

function getToEmail() {
  return process.env.TO_EMAIL// 'manikumarkv@gmail.com'// appSettingsService.getSettingByKey('emailFrom')
}

function getEmailBody(booking) {
  return `
  Hi Team,

  This is confirmation email from ${booking.name} (${booking.phoneNumber}) on date: ${booking.bookingDate}
  Puja Type: Online
  SkypeID is: ${booking.videoCallUserName}.

  Thanks,
  Online Sastry Team.
  
  `
}

function getUpdateBookingBody(booking) {
  return `
  Hi Team,

  This is updation of booking email from ${booking.name} (${booking.phoneNumber}) on date: ${booking.bookingDate}
  Puja Type: Online
  SkypeID is: ${booking.videoCallUserName}.

  Thanks,
  Online Sastry Team.
  
  `
}
function getCancleBookingBody(booking) {
  return `
  Hi Team,
  
  Booking got canclled from ${booking.id} - ${booking.name} - ${booking.phoneNumber}.
  
  Thanks,
  Online Sastry Team
  `

}

async function sendBookingConfirmation(booking) {
  console.log("ready to send email fir create")
  const emailBody = getEmailBody(booking)
  const toEmail = getToEmail();
  const fromEmail = getEmaildetails()

  return await send(fromEmail, toEmail, `Booking confirmation from ${booking.name}`, emailBody)

}

async function sendUpdateBookingEmail(booking) {
  const emailBody = getUpdateBookingBody(booking)
  const toEmail = getToEmail();
  const fromEmail = getEmaildetails()

  return await send(fromEmail, toEmail, 'Booking updation', emailBody)

}

async function sendCancelBookingEmail(booking) {
  const emailBody = getCancleBookingBody(booking)
  const toEmail = getToEmail();
  const fromEmail = getEmaildetails()

  return await send(fromEmail, toEmail, 'Booking canclled', emailBody)

}

module.exports = { sendBookingConfirmation, sendUpdateBookingEmail, sendCancelBookingEmail }
