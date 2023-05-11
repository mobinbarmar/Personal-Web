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
    } catch (err) {
        console.log(err)
    }
}