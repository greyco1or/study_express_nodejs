var express = require("express");
var app = express();
app.set("view engine", "jade");
app.set("views", "./views");
app.use(express.static("public"));
app.get("/topic", function (req, res) {
  var topics = ["Javascript is...", "Nodejs is...", "Express is..."];

  var str = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
  `;

  var output = str + topics[req.query.id];
  res.send(output);
});
app.get("/param/:module_id/:topic_id", function (req, res) {
  res.json(req.params);
});
app.get("/template", function (req, res) {
  res.render("temp", { time: Date(), _title: "제이드" });
});
app.get("/", function (req, res) {
  res.send("Hello home page");
});
app.get("/dynamic", function (req, res) {
  var output = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document</title>
    </head>
    <body>
      hello, Dynamic!
    </body>
  </html>`;
  res.send(output);
});
app.get("/route", function (req, res) {
  res.send('Hello Router, <img src="/route.png">');
});
app.get("/login", function (req, res) {
  res.send("<h1>Login plz</h1>");
});
app.listen(3000, function () {
  console.log("Connected 3000 port!");
});
