const router = require("express").Router();
const {
  controlPost,
  controlGlobal,
} = require("../middleware/controlMiddleware");

router.get("/hello", controlGlobal, (req, res) => {
  res.send("Merhaba, GET isteği attınız");
});

router.post("/hello", controlGlobal, controlPost, (req, res) => {
  res.send("Merhaba, POST isteği attınız");
});

router.put("/hello", controlGlobal, (req, res) => {
  res.send("Merhaba, PUT isteği attınız");
});

router.delete("/hello", controlGlobal, (req, res) => {
  res.send("Merhaba, DELETE isteği attınız");
});

module.exports = router;
