const projects = require('./data').projects;

function create(project) {
  return projects.push(project);
}

function findAll() {
  return projects;
}

module.exports = { create, findAll };
