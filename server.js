import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
// routes

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
  res.json({ message: "Route rout" });
});
app.get("/messages", (req, res) => {
  res.json({ message: "Route messages rooot" });
});

app.post("/messages", (req, res) => {
  const body = req.body;
  res.json({ message: body });
  // const { num1, num2 } = req.body;
  // const result = num1 + num2;
  // res.json({ message: num1 + " + " + num2 + "= " + result });
});
