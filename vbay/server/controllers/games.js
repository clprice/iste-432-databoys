const Game = require('../models').Game

module.exports = {
    create(req, res) {
        return Game.create({
            name: req.body.name,
            description: req.body.description,
            igdbid: req.body.igdbid
        }).then(todo => res.status(201).send(todo)).catch(error => res.status(400).send(error))
    },
    list(req, res) {
        return Game
            .findAll()
            .then(games => res.status(200).send(games))
            .catch(error => res.status(400).send(error))
    },
    retrieve(req, res) {
        return Game
            .findById(req.params.gameid)
            .then(game => {
                if (!game) {
                    return res.status(404).send({
                        message: 'Game Not Found',
                    })
                }
                return res.status(200).send(game)
            })
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        return Game
            .findById(req.params.gameid)
            .then(game => {
                if (!game) {
                    return res.status(404).send({
                        message: 'Game Not Found',
                    })
                }
                return game
                    .update({
                        gameid: req.params.gameid || game.gameid,
                        name: req.body.name || game.name,
                        description: req.body.description || game.description,
                        igdbid: req.body.igdb || game.igdb
                    })
                    .then(() => res.status(200).send(game))  // Send back the updated game.
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },
    destroy(req, res) {
        return Game
            .findById(req.params.gameid)
            .then(game => {
                if (!game) {
                    return res.status(400).send({
                        message: 'Game Not Found',
                    })
                }
                return game
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Game deleted successfully.' }))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}