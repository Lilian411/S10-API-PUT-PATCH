const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.status(200).json({
        "titulo": "To-do Api - Reprograma",
        "version": "1.0.0",
        "mensagem": "Ola, mundo bem vindo a API de tarefas "
    })
})
module.exports = router