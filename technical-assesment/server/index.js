const express = require("express");
const conn = require("./database-mysql/index");
const recipiesRoute = require("./routes/recipiesRoute");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use("/api", recipiesRoute);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
