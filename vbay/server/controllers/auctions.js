const Auction = require('../models').Auction

module.exports = {
    create(req, res) {
        return Auction.create({
            auctionid: req.body.auctionid,
            name: req.body.name,
            description: req.body.description
        }).then(todo => res.status(201).send(todo)).catch(error => res.status(400).send(error))
    },
    list(req, res) {
        return Auction
            .findAll()
            .then(auctions => res.status(200).send(auctions))
            .catch(error => res.status(400).send(error))
    },
    retrieve(req, res) {
        return Auction
            .findById(req.params.id)
            .then(auction => {
                if (!auction) {
                    return res.status(404).send({
                        message: 'Auction Not Found',
                    })
                }
                return res.status(200).send(auction)
            })
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        return Auction
            .findById(req.params.id)
            .then(auction => {
                if (!auction) {
                    return res.status(404).send({
                        message: 'Auction Not Found',
                    })
                }
                return auction
                    .update({
                        auctionid: req.body.auctionid || auction.auctionid,
                        name: req.body.name || auction.name,
                        description: req.body.description || auction.description
                    })
                    .then(() => res.status(200).send(auction))  // Send back the updated auction.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },
    destroy(req, res) {
        return Auction
            .findById(req.params.id)
            .then(auction => {
                if (!auction) {
                    return res.status(400).send({
                        message: 'Auction Not Found',
                    })
                }
                return auction
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Auction deleted successfully.' }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}