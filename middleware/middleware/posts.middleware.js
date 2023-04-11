module.exports = reqFilter = (req, res, next) => {
    if (!req.headers.id) {
      res.send("Please provide your id");
    } else if (req.headers.id < 3) {
      res.send("Please provide id greater than 2");
    } else {
      next();
    }
  };