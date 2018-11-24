const Trade = require('../models').Trade

module.exports = {
    create(req, res) {
        return Trade
            .create({
                tradeid: req.body.tradeid,
                email: req.body.email,
                password: req.body.password,
                fname: req.body.fname,
                lname: req.body.lname
            })
            .then(trade => res.status(201).send(trade))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Trade
            .findAll()
            .then(trades => res.status(200).send(trades))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return Trade
            .findById(req.params.id)
            .then(trade => {
                if (!trade) {
                    return res.status(404).send({
                        message: 'Trade Not Found',
                    })
                }
                return res.status(200).send(trade)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return Trade
            .findById(req.params.id)
            .then(trade => {
                if (!trade) {
                    return res.status(404).send({
                        message: 'Trade Not Found',
                    })
                }
                return trade
                    .update({
                        tradeid: req.body.tradeid || trade.tradeid,
                        email: req.body.email || trade.email,
                        password: req.body.password || trade.password,
                        fname: req.body.fname || trade.fname,
                        lname: req.body.lname || trade.lname
                    })
                    .then(() => res.status(200).send(trade))  // Send back the updated trade.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return Trade
            .findById(req.params.id)
            .then(trade => {
                if (!trade) {
                    return res.status(400).send({
                        message: 'Trade Not Found',
                    })
                }
                return trade
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Trade deleted successfully.' }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}