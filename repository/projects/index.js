const projects = require('./data').projects;
let arrayRisco = [];

function create(project) {
  return projects.push(project);
}

function findAll() {
  return projects;
}

function findRisco(){
  let cont=0;

    for( a in projects){
      let y=0;

      for( b in projects[a].reports){

        if (projects[a].reports[b] == 'Red'){
          arrayRisco[cont] = projects[a];
          cont++;
          break;
        } else if (projects[a].reports[b] == 'Yellow' && y==0){
          y++;
        } else if (projects[a].reports[b] == 'Yellow' && y>0){
          arrayRisco[cont] = projects[a];
          cont++;
          break;
        }
      }
    }
  return arrayRisco;
}



module.exports = { create, findAll, findRisco };
