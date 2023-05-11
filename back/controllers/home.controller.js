const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'barmar.mobin@gmail.com',
      pass: 'sdxalgkxxwlpfgaf'
    }
});


const { Post } = require('../db/DB');

exports.post = (req, res) => {
    try {
        Post.create({
            'firstName': req.body.firstName,
            'lastName': req.body.lastName,
            'email': req.body.email,
            'phone': req.body.code + req.body.phone,
            'description': req.body.description
        }).then(result => {
            res.status(201)
            res.send(result)
        })
        console.log('iscreated!!!!');
        const mailOptions = {
            from: 'barmar.mobin@gmail.com',
            to: 'barmar.mobin2@gmail.com',
            subject: 'New message',
            text: `name: ${req.body.firstName} ${req.body.lastName}\n
            email: ${req.body.email}\n
            phone: ${req.body.code + req.body.phone}\n
            message: ${req.body.description}`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    } catch (err) {
        console.log(err)
    }
}