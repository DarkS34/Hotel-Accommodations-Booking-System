const accommodationsRouter = require("./accommodation");
const hotelsRouter = require("./hotel");
const usersRouter = require("./users");

const mainRouter = require("express").Router();

mainRouter.use("/accommodations", accommodationsRouter);
mainRouter.use("/hotels", hotelsRouter);
mainRouter.use("/users", usersRouter);

module.exports = mainRouter;
