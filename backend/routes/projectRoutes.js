const express = require('express')
const router = express.Router()
const { getProjects } = require('../controller/projectController')
router.route('/list').get(getProjects)
module.exports = router