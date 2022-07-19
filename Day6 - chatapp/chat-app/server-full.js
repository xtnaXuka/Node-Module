const fs = require("fs");
const http = require("http");
const querystring = require("querystring");
const EventEmitter = require("events");

const chatEmitter = new EventEmitter();
const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    if (req.url === "/") return respondText(req, res);
    if (req.url === "/json") return respondJson(req, res);
    if (req.url === "/sse") return respondSSE(req, res);
    if (req.url.match(/^\/chat/)) return respondChat(req, res);
    if (req.url.match(/^\/echo/)) return respondEcho(req, res);
    if (req.url.match(/^\/static/)) return respondStatic(req, res);

    return respondNotFound(req, res);
  })
  .listen(port, () => console.log(`Server listening on port ${port}`));

function respondText(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("hi");
}

function respondJson(req, res) {
  res.end(JSON.stringify({ text: "hi", numbers: [1, 2, 3] }));
}

function respondEcho(req, res) {
  console.log(req.url);
  const { input = "" } = req.url;

  res.end(
    JSON.stringify({
      normal: input,
      shouty: input.toUpperCase(),
      characterCount: input.length,
      backwards: input.split("").reverse().join(""),
    })
  );
}

function respondStatic(req, res) {
  const filename = `${__dirname}/public/${req.url.split("/static")[1]}`;
  fs.createReadStream(filename)
    .on("error", () => respondNotFound(req, res))
    .pipe(res);
}

function respondChat(req, res) {
  console.log(req.url);
  const message = req.url.split("?message=")[1];
  console.log(message);

  chatEmitter.emit("message", message);
  res.end();
}

function respondSSE(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });

  const onMessage = (msg) => res.write(`data: ${msg}\n\n`);
  chatEmitter.on("message", onMessage);

  res.on("close", function () {
    chatEmitter.off("message", onMessage);
  });
}

function respondNotFound(req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
}