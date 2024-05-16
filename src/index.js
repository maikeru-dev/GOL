const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(__dirname));

app.get("/", (_, res) => {
  console.log("[GET] '/'");
  res.sendFile(path.join(__dirname, "/assets/index.html"));
});

app.listen(port, () => {
  console.log(`Example listening at http://localhost:${port}`);
});
