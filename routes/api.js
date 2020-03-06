const express = require('express');
const drugController = require("../controllers/drugController");
const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

router.route("/")
.get(drugController.findAll)
.post(drugController.create);

router.route("/:id")
.get(drugController.findById)
.put(drugController.update)
.delete(drugController.remove);

module.exports = router;
module.exports = router;
