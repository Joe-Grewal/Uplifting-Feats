const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.get("/", async (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});