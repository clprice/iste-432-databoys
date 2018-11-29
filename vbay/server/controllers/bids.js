const Bid = require('../models').Bid

module.exports = {
    create(req, res) {
        return Bid
            .create({
                userid: req.body.userid,
                auctionid: req.params.auctionid,
                price: req.body.price
            })
            .then(bid => res.status(201).send(bid))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Bid
            .findAll()
            .then(bids => res.status(200).send(bids))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return Bid
            .findById(req.params.id)
            .then(bid => {
                if (!bid) {
                    return res.status(404).send({
                        message: 'Bid Not Found',
                    })
                }
                return res.status(200).send(bid)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return Bid
            .findById(req.params.id)
            .then(bid => {
                if (!bid) {
                    return res.status(404).send({
                        message: 'Bid Not Found',
                    })
                }
                return bid
                    .update({
                        bidid: req.params.bidid || bid.bidid,
                        userid: req.body.userid || bid.userid,
                        auctionid: req.body.auctionid || bid.auctionid,
                        price: req.body.price || bid.price
                    })
                    .then(() => res.status(200).send(bid))  // Send back the updated bid.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return Bid
            .findById(req.params.id)
            .then(bid => {
                if (!bid) {
                    return res.status(400).send({
                        message: 'Bid Not Found',
                    })
                }
                return bid
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Bid deleted successfully.' }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}