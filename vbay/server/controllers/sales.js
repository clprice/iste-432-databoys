const Sale = require('../models').Sale

module.exports = {
    create(req, res) {
        return Sale
            .create({
                auctionid: req.params.auctionid,
                bidid: req.body.bidid,
                price: req.body.price
            })
            .then(sale => res.status(201).send(sale))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Sale
            .findAll()
            .then(sales => res.status(200).send(sales))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return Sale
            .findById(req.params.saleid)
            .then(sale => {
                if (!sale) {
                    return res.status(404).send({
                        message: 'Sale Not Found',
                    })
                }
                return res.status(200).send(sale)
            })
            .catch(error => res.status(400).send(error))
    },

    update(req, res) {
        return Sale
            .findById(req.params.saleid)
            .then(sale => {
                if (!sale) {
                    return res.status(404).send({
                        message: 'Sale Not Found',
                    })
                }
                return sale
                    .update({
                        saleid: req.params.saleid || sale.saleid,
                        auctionid: req.body.auctionid || sale.auctionid,
                        bidid: req.body.bidid || sale.bidid,
                        price: req.body.price || sale.price
                    })
                    .then(() => res.status(200).send(sale))  // Send back the updated sale.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },

    destroy(req, res) {
        return Sale
            .findById(req.params.saleid)
            .then(sale => {
                if (!sale) {
                    return res.status(400).send({
                        message: 'Sale Not Found',
                    })
                }
                return sale
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Sale deleted successfully.' }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}