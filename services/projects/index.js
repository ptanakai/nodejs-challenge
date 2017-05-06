const Projects = require('../../repository/projects');

function create(project) {
  return Projects.create(project);
}

function findAll() {
  return Projects.findAll();
}

module.exports = { create, findAll };
