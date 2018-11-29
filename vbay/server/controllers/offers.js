const Offer = require('../models').Offer

module.exports = {
    create(req, res) {
        return Offer
            .create({
                userid: req.body.userid,
                tradeid: req.params.tradeid,
                gameid: req.body.gameid,
                condition: req.body.condition,
                message: req.body.message
            })
            .then(offer => res.status(201).send(offer))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Offer
            .findAll()
            .then(offers => res.status(200).send(offers))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return Offer
            .findById(req.params.offerid)
            .then(offer => {
                if (!offer) {
                    return res.status(404).send({
                        message: 'Offer Not Found',
                    })
                }
                return res.status(200).send(offer)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return Offer
            .findById(req.params.offerid)
            .then(offer => {
                if (!offer) {
                    return res.status(404).send({
                        message: 'Offer Not Found',
                    })
                }
                return offer
                    .update({
                        offerid: req.params.offerid || offer.offerid,
                        userid: req.body.userid || offer.userid,
                        tradeid: req.body.tradeid || offer.tradeid,
                        gameid: req.body.gameid || offer.gameid,
                        condition: req.body.condition || offer.condition,
                        message: req.body.message || offer.message
                    })
                    .then(() => res.status(200).send(offer))  // Send back the updated offer.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return Offer
            .findById(req.params.offerid)
            .then(offer => {
                if (!offer) {
                    return res.status(400).send({
                        message: 'Offer Not Found',
                    })
                }
                return offer
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Offer deleted successfully.' }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}