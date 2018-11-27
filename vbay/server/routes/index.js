const auctionsController = require('../controllers').auctions
const bidsController = require('../controllers').bids
const completedtradesController = require('../controllers').completedtrades
const gamesController = require('../controllers').games
const offersController = require('../controllers').offers
const salesController = require('../controllers').sales
const tradesController = require('../controllers').trades
const usersController = require('../controllers').users

module.exports = (app) => {
    app.get('/vbay-api', (req, res) => res.status(200).send({
        message: 'You have successfully connected to the vbay API',
    }))

    /**** CREATE ****/
    // Auctions
    app.post('/vbay-api/users/:userid/auctions', auctionsController.create)
    // Bids
    app.post('/vbay-api/auctions/:auctionid/bids', bidsController.create)
    // CompletedTrades
    app.post('/vbay-api/trades/:tradeid/completedtrades', completedtradesController.create)
    // Games
    app.post('/vbay-api/games', gamesController.create)
    // Offers
    app.post('/vbay-api/trades/:tradeid/offers', offersController.create)
    // Sales
    app.post('/vbay-api/auctions/:auctionid/sales', salesController.create)
    // Trades
    app.post('/vbay-api/users/:userid/trades', tradesController.create)
    // Users
    app.post('/vbay-api/users', usersController.create)

    /**** READ ****/
    // Auctions
    app.get('/vbay-api/auctions', auctionsController.list)
    app.get('/vbay-api/auctions/:auctionid', auctionsController.retrieve)
    // Bids
    app.get('/vbay-api/bids', bidsController.list)
    app.get('/vbay-api/bids/:bidid', bidsController.retrieve)
    // CompletedTrades
    app.get('/vbay-api/completedtrades', completedtradesController.list)
    app.get('/vbay-api/completedtrades/:completionid', completedtradesController.retrieve)
    // Games
    app.get('/vbay-api/games', gamesController.list)
    app.get('/vbay-api/games/:gameid', gamesController.retrieve)
    // Offers
    app.get('/vbay-api/offers', offersController.list)
    app.get('/vbay-api/offers/:offerid', offersController.retrieve)
    // Sales
    app.get('/vbay-api/sales', salesController.list)
    app.get('/vbay-api/sales/:saleid', salesController.retrieve)
    // Trades
    app.get('/vbay-api/trades', tradesController.list)
    app.get('/vbay-api/trades/:tradeid', tradesController.retrieve)
    // Users
    app.get('/vbay-api/users', usersController.list)
    app.get('/vbay-api/users/:userid', usersController.retrieve)

    /**** UPDATE ****/
    // Auctions
    app.put('/vbay-api/auctions/:auctionid', auctionsController.update)
    // Bids
    app.put('/vbay_api/bids/:bidid', bidsController.update)
    // CompletedTrades
    app.put('/vbay_api/completedtrades/:completionid', completedtradesController.update)
    // Games
    app.put('/vbay-api/games/:gameid', gamesController.update)
    // Offers
    app.put('/vbay_api/offers/:offerid', offersController.update)
    // Sales
    app.put('/vbay_api/sales/:saleid', salesController.update)
    // Trades
    app.put('/vbay_api/trades/:tradeid', tradesController.update)
    // Users
    app.put('/vbay-api/users/:id', usersController.update)

    /**** DELETE ****/
    // Auctions
    app.delete('/vbay-api/auctions/:auctionid', auctionsController.destroy)
    // Bids
    app.delete('/vbay-api/bids/:bidid', bidsController.destroy)
    // CompletedTrades
    app.delete('/vbay-api/completedtrades/:completionid', completedtradesController.destroy)
    // Games
    app.delete('/vbay-api/games/:gameid', gamesController.destroy)
    // Offers
    app.delete('/vbay-api/offers/:offerid', offersController.destroy)
    // Sales
    app.delete('/vbay-api/sales/:saleid', salesController.destroy)
    // Trades
    app.delete('/vbay-api/trades/:tradeid', tradesController.destroy)
    // Users
    app.delete('/vbay-api/users/:id', usersController.destroy)
}