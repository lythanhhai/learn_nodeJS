const nodemailer = require("nodemailer")

const sendMail = async (req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    });

    const result = await transporter.sendMail({
        from: process.env.user,
        to: "lythanhhait@gmail.com",
        subject: 'Hello World',
        text: 'Hello World'
    });

    // console.log(JSON.stringify(result, null, 4));

    return res.status(200).json({ success: true })
}

module.exports = { sendMail };