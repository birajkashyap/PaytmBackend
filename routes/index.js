const express = require("express");
const userRouter = require("./user");

const router = express.Router();

router.use("/user", userRouter);

const accountRouter = require("./account");

router.use("/account", accountRouter);

module.exports = router;
