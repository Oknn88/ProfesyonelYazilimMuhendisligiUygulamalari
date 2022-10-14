const express = require("express");
const router = require("./router/helloRoute");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`${port} portunda calisiyor.`);
});
