import express from "express";

const app = express();
app.use(express.json());
// your routes will go here...

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
app.get("/", (req, res) => {
  res.send("hello world");
});
// POST method route
app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

app.get("/messages", (req, res) => {
  res.json({ message: "Hello GET, World!" });
});

app.post("/messages/add/:num1/:num2", (req, res) => {
  // parameters seen as strings so transform to integers
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  // perform the calculation
  const total = num1 + num2;
  // return the message and total
  res.json({
    message: num1 + ` plus ` + num2 + ` = ` + total,
  });
});
app.post("/messages/subtract/:num1/:num2", (req, res) => {
  // parameters seen as strings so transform to integers
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  // perform the calculation
  const total = num1 - num2;
  // return the message and total
  res.json({
    message: num1 + ` minus ` + num2 + ` = ` + total,
  });
});
app.post("/messages/divide/:num1/:num2", (req, res) => {
  // parameters seen as strings so transform to integers
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  // perform the calculation
  const total = num1 / num2;
  // return the message and total
  res.json({
    message: num1 + ` divided by ` + num2 + ` = ` + total,
  });
});
app.post("/messages/multiply/:num1/:num2", (req, res) => {
  // parameters seen as strings so transform to integers
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  // perform the calculation
  const total = num1 * num2;
  // return the message and total
  res.json({
    message: num1 + ` multiplied by ` + num2 + ` = ` + total,
  });
});

//remember to re-start server  node server.js
