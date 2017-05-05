const Projects = require('../../repository/projects');

function create(project) {
  Projects.create(project);
}

function findAll() {
  Projects.findAll();
}

module.exports = { create, findAll };
