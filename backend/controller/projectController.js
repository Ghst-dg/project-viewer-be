const asyncHandler = require('express-async-handler')
const Project = require('../model/projectModel')
const getProjects = asyncHandler(async(req, res) => {
    const page = parseInt(req.query.page) || 1;

    const projects = await Project.find().skip((page - 1) * pageSize).limit(pageSize);
    res.status(200).json(projects);
})
module.exports = {
    getProjects,
}