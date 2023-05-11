exports.post = (req, res) => {
    try {
        console.log(req.body);
        res.send('posted!')
    } catch (err) {
        console.log(err)
    }
}