# MULTICLINICAS 

AHJzor79hG
## Running

- Install NPM modules /api `cd api` and `npm install`.
- Install NPM modules /webapp `cd webapp` and `npm install`.
- Modify `/api/src/config/database.json` for Database credentials.
- Modify `/api/src/config/config.json` for /api port.
- Modify `/webapp/.env` for webapp port.
- Run /api and `npm start`, in browser GraphiQL at http://localhost:3000/
- Run webapp `cd webapp` and `npm start`, at http://localhost:8000/


## /api built with:
- Node.js
- Javascript
- Babel
- Express
- JsonWebToken
- GraphQL
- Sequelize
- MySQL

## /webapp built with:
- React
- Redux
- Axios
- Javascript


## Sample Queries/Mutations GraphQL:

query {
  userLogin(email:"mt@mail", password: "somestrongpassword"){
    token
  }
}

mutation{
  creatingUser(firstname: "Joseph", middle_initial: "M", lastname:"Books", email:"mt@mail", password: "somestrongpassword", available:"1"){
    id
    email
    lastname
  }
}

## Database model tables
Following model types must be predefined in the database 


mutation {
  creatingUserType(name: "admin"){
    name
  }
}
mutation {
  creatingUserType(name: "poweruser"){
    name
  }
}
mutation {
  creatingUserType(name: "limiteduser"){
    name
  }
}

mutation {
  creatingUserType(name: "basicuser"){
    name
  }
} 


## Error ENOSPC

When internal watch failed ENOSPC use:
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

`echo fs.inotify.max_user_watches=524288 it increase the number of watches of nodemon as you made some changes in your project and sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
Is sysctl command for configure kernel parameters at runtime

## Error with states/ connection to database

Change the following ip to connect to server on backend
webapp/.env
webapp/package.json

## Permissions Levels

1. admin: Allowed to edit, delete and create all
2. doctor: Allowed to edit, delete and create all, but, Sucursales, Empleados
3. otro: : Allowed to see all, and, create only Pacientes, Medicina

## Start DB  

INSERT INTO `testing`.`tipousuarios` (`id`, `nombre`) VALUES ('1', 'admin');

INSERT INTO `testing`.`tipousuarios` (`id`, `nombre`) VALUES ('2', 'doctor');

INSERT INTO `testing`.`tipousuarios` (`id`, `nombre`) VALUES ('3', 'otro');

INSERT INTO `testing`.`sucursales` (`id`, `nombre`) VALUES ('1', 'Clinicas Aguacateras');

INSERT INTO `testing`.`tipousuarios` (`id`, `nombre`) VALUES ('1', 'Doctor');

INSERT INTO `testing`.`users` 
(`id`, `nombre`, `apellido`, `email`, `password`, `first_users`, `fechanacimiento`, 
`estadocivil`, `nacionalidad`, `domicilio`, `ocupacion`, `sucursaleId`, `tipousuarioId`) 
VALUES ('1', 'Mauricio', 'Toledo', 'mauricio@mail.com', 
'$2b$10$poRubduVUMEkk0CAGqqQYO0ysz.Se3VLA.tedeXdSBC9zDmATo/IG', '1', '1992/01/01', 'soltero', 
'guatemalteco', 'guatemala', 'doctor por el dia, programador por la noche', '1', '1');
