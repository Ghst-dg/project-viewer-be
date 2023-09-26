const asyncHandler = require('express-async-handler')
const Project = require('../model/projectModel')
const getProjects = asyncHandler(async(req, res) => {
    const projects = await Project.find()
    res.status(200).json(projects)
})
module.exports = {
    getProjects,
}