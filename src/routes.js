const express = require('express');
var router = express.Router()

const crudController = require("./apis/crud")

// Routes to specific function based on URL

router.get("/", crudController.index)
router.post("/create", crudController.create)
router.get("/read", crudController.read)
router.post("/update", crudController.update)
router.get("/delete", crudController.delete)


module.exports = router