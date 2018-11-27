const Trade = require('../models').Trade

module.exports = {
    create(req, res) {
        console.log('here')
        return Trade
            .create({
                userid: req.params.userid,
                gameid: req.body.gameid,
                description: req.body.description,
                condition: req.body.condition,
                status: req.body.status
            })
            .then(trade => res.status(201).send(trade))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Trade
            .findAll({
                include: [
                    {
                        model: Offer,
                        as: 'offers'
                    }
                ]
            })
            .then(trades => res.status(200).send(trades))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return Trade
            .findById(req.params.tradeid, {
                include: [
                    {
                        model: Offer,
                        as: 'offers'
                    }
                ]
            })
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
            .findById(req.params.tradeid)
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
            .findById(req.params.tradeid)
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