const app = require("./app");
const http = require("http");

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, async () => {
  console.log(`server's running on port ${port}`);
});

module.exports = server;
