const CompletedTrade = require('../models').CompletedTrade

module.exports = {
    create(req, res) {
        return CompletedTrade
            .create({
                tradeid: req.params.tradeid,
                offerid: req.body.offerid
            })
            .then(completedtrade => res.status(201).send(completedtrade))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return CompletedTrade
            .findAll()
            .then(completedtrades => res.status(200).send(completedtrades))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return CompletedTrade
            .findById(req.params.completionid)
            .then(completedtrade => {
                if (!completedtrade) {
                    return res.status(404).send({
                        message: 'CompletedTrade Not Found',
                    })
                }
                return res.status(200).send(completedtrade)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return CompletedTrade
            .findById(req.params.completionid)
            .then(completedtrade => {
                if (!completedtrade) {
                    return res.status(404).send({
                        message: 'CompletedTrade Not Found',
                    })
                }
                return completedtrade
                    .update({
                        completionid: req.params.completionid || completedtrade.completionid,
                        tradeid: req.body.tradeid || completedtrade.tradeid,
                        offerid: req.body.offerid || completedtrade.offerid
                    })
                    .then(() => res.status(200).send(completedtrade))  // Send back the updated completedtrade.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return CompletedTrade
            .findById(req.params.completionid)
            .then(completedtrade => {
                if (!completedtrade) {
                    return res.status(400).send({
                        message: 'CompletedTrade Not Found',
                    })
                }
                return completedtrade
                    .destroy()
                    .then(() => res.status(200).send({ message: 'CompletedTrade deleted successfully.' }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}