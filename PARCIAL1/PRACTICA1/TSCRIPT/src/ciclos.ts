// Importar el arreglo de usuarios
import { Users } from "./entidades";

// Mediante forEach
console.log(
  "******************** Usuarios mediante ciclo 1 forEach ********************"
);
Users.forEach((user) => {
  for (let i = 0; i < 3; i++) {
    console.log(
      `Nombre: ${user.name}, Apellido: ${user.Lname}, Teléfono: ${user.Phone}, Cédula: ${user.idCard}`
    );
  }
});

// Mediante for in
console.log(
  "******************** Usuarios mediante ciclo 2 For In ********************"
);
for (const index in Users) {
  const user = Users[index];
  for (let i = 0; i < 3; i++) {
    console.log(
      `Nombre: ${user.name}, Apellido: ${user.Lname}, Teléfono: ${user.Phone}, Cédula: ${user.idCard}`
    );
  }
}

// Mediante for of
console.log(
  "******************** Usuarios mediante ciclo 3 For Of ********************"
);
for (const user of Users) {
  for (let i = 0; i < 3; i++) {
    console.log(
      `Nombre: ${user.name}, Apellido: ${user.Lname}, Teléfono: ${user.Phone}, Cédula: ${user.idCard}`
    );
  }
}
