const PathFundRouter = require('./PathFundRouter');
module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: "TO DO"});
    });

    // @route POST api/auth/login
    app.use('/api/pathfund', PathFundRouter);
};