const projects = require('./data').data;

function create(project) {
  projects.push(project);
  console.log(projects);
}

function findAll() {
  console.log(projects);
}

module.exports = { create, findAll };
