

const Users = require('./entidades'); 


//Mediante forEach

console.log("********************Usuarios mediante ciclo 1 forEach********************");
Users.forEach((user) => {
  for (let i = 0; i < 3; i++) {
    console.log(
      `Nombre: ${user.name}, Apellido: ${user.Lname}, Teléfono: ${user.Phone}, Cédula: ${user.idCard}`
    );
  }
});

// Mediante for in
console.log("********************Usuarios mediante ciclo 2 For In********************");
for (let index in Users) {
  const user = Users[index];
  for (let i = 0; i < 3; i++) {
    console.log(
      `Nombre: ${user.name}, Apellido: ${user.Lname}, Teléfono: ${user.Phone}, Cédula: ${user.idCard}`
    );
  }
}

//Mediante For of
console.log("********************Usuarios mediante ciclo 3 For of********************");
for (const user of Users) {
  for (let i = 0; i < 3; i++) {
    console.log(
      `Nombre: ${user.name}, Apellido: ${user.Lname}, Teléfono: ${user.Phone}, Cédula: ${user.idCard}`
    );
  }
}

