const projectsService = require('../../services/projects');

function get(req, res) {
  const projects = projectsService.findAll();
  return res.status(200).json(projects);
}

function post(req, res) {
  if(projectsService.create(req.body) == true){  
  return res.status(201).json({ message: 'Project Created' });
  } else{
    return res.status(201).json({ message:'Project Not Created Because Name Not Found'});
  }
}

function getRisco(req, res){
  const projects = projectsService.findRisco();
  return res.status(200).json(projects);
}

module.exports = { get, post, getRisco };
