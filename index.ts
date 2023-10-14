import app from "./app";
import http from "http";

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, async () => {
  console.log(`server's running on port ${port}`);
});

export default server;
