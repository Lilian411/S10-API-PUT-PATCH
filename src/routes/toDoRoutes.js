const express = require("express");
const router = express.Router();
const controller = require("../controllers/toDoControllers");
router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/cadastrar", controller.createTask);

router.delete("/:id", controller.deleteTask);

router.put("/:id", controller.replaceTarefa);
router.patch("/updateTitle/:id", controller.updateNome);

module.exports = router