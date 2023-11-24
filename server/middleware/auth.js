const jwt = require("jsonwebtoken");
const SECRET = "dumMpY"; // This should be in an environment variable in a real application

const authenticateJwt = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  authenticateJwt,
  SECRET,
};
