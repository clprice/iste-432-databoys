const usersController = require('../controllers').users;
const gamesController = require('../controllers').games;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'You have successfully connected to the vbay API',
    }));

    /* Creates */
    //Users
    app.post('/api/users', usersController.create);
    //Games
    app.post('/api/games', gamesController.create);

    /* Reads */
    //Users
    app.get('/api/users', usersController.list);
    app.get('/api/users/:id', usersController.retrieve);
    //Games
    app.get('/api/games', gamesController.list);
    app.get('/api/games/:gameid', gamesController.retrieve);

    /* Updates */
    //Users
    app.put('/api/users/:id', usersController.update);
    //Games
    app.put('/api/games/:gameid', gamesController.update);

    /* Deletes */
    //Users
    app.delete('/api/users/:id', usersController.destroy);
    //Games
    app.delete('/api/games/:gameid', gamesController.destroy);
};