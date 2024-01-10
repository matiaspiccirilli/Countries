const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors(
    {
        origin: "*",
        methods: "GET,PUT,PATCH,HEAD,DELETED,POST",
        credentials: true,
    }
));

server.use(router);

module.exports = server;
