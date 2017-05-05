const projectsService = require('../../services/projects');

function get(req, res) {
  projectsService.findAll();
  return res.sendStatus(200);
}

function post(req, res) {
  projectsService.create(req.body);
  return res.sendStatus(200);
}

module.exports = { get, post };
