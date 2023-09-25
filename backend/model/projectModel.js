const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    'Project.Title': {
        type: String,
    },
    'Project.Technologies': {
        type: String,
    },
    'Technical_Skillset.Frontend': {
        type: String,
    },
    'Technical_Skillset.Backend': {
        type: String,
    },
    'Technical_Skillset.Databases': {
        type: String,
    },
    'Technical_Skillset.Infrastructre': {
        type: String,
    },
});

module.exports = mongoose.model('Project', projectSchema);
