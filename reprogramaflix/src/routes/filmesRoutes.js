const express = require("express");
const router = express.Router();

// criar rotas

const controller = require("../controllers/filmesControllers");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

//router.filme("/create", controller.createFilme);

// router.delete("/:id", controller.deletePost);

router.put("/:id", controller.replaceFilme);
router.patch("/updateTitle/:id", controller.updateTitle);

// router.patch("/update/:id", controller.updateAnything);

module.exports = router;