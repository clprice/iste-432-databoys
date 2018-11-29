const User = require('../models').User
const Auction = require('../models').Auction
const Trade = require('../models').Trade

module.exports = {
    create(req, res) {
        return User
            .create({
                userid: req.body.userid,
                email: req.body.email,
                password: req.body.password,
                fname: req.body.fname,
                lname: req.body.lname
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return User
            .findAll({
                include: [
                    {
                        model: Auction,
                        as: 'selling'
                    },
                    {
                        model: Trade,
                        as: 'trading'
                    }
                ]
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return User
            .findById(req.params.userid, {
                include: [
                    {
                        model: Auction,
                        as: 'selling'
                    },
                    {
                        model: Trade,
                        as: 'trading'
                    }
                ]
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    })
                }
                return res.status(200).send(user)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return User
            .findById(req.params.userid)
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    })
                }
                return user
                    .update({
                        userid: req.params.userid || user.userid,
                        email: req.body.email || user.email,
                        password: req.body.password || user.password,
                        fname: req.body.fname || user.fname,
                        lname: req.body.lname || user.lname
                    })
                    .then(() => res.status(200).send(user))  // Send back the updated user.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return User
            .findById(req.params.id)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    })
                }
                return user
                    .destroy()
                    .then(() => res.status(200).send({ message: 'User deleted successfully.' }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}