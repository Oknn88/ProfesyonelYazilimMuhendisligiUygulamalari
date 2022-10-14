const controlGlobal = (req, res, next) => {
  console.log("Yeni bir istek geldi");
  next();
};

const controlPost = (req, res, next) => {
  console.log("Post iseği için istek gönderildi");
  next();
};

module.exports = { controlPost, controlGlobal };
