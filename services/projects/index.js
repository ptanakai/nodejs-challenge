const Projects = require('../../repository/projects');

function create(project) {
  return Projects.create(project);
}

function findAll() {
  return Projects.findAll();
}

function findRisco(){
  return Projects.findRisco();
}

module.exports = { create, findAll, findRisco };
