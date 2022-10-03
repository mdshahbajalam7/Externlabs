const express = require("express");
const upload = require("express-fileupload");

const app = express();

app.use(upload());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  if (req.files) {
    console.log(req.files);
    let file = req.files.file;
    let filename = file.name;
    console.log(filename);

    file.mv("./Upload/" + filename, function (err) {
      if (err) {
        res.send("err");
      } else {
        res.send("file Upload successfully");
      }
    });
  }
});

app.listen(8080, () => {
  console.log("server start on http://localhost:8080");
});
