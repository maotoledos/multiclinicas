# MULTICLINICAS 

Web and Mobile application for multiclinics
Web built in React JS
Mobile built in React Native


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


AHJzor79hG is the password that allows you login.