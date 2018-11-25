const Auction = require('../models').Auction

module.exports = {
    create(req, res) {
        console.log(req.body)
        return Auction.create({
            auctionid: req.body.auctionid,
            userid: req.body.userid,
            gameid: req.body.gameid,
            description: req.body.description,
            status: req.body.status,
            startprice: req.body.startprice
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
                        userid: req.body.userid || auction.userid,
                        gameid: req.body.gameid || auction.gameid,
                        description: req.body.description || auction.description,
                        status: req.body.status || auction.status,
                        startprice: req.body.startprice || auction.startprice
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