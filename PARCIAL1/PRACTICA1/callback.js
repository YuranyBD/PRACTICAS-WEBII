// Importancion
const Users = require("./entidades");

// Función para buscar usuario por ID usando callback
function findUserById(id, callback) {
  const user = Users.find((user) => user.idCard === id);
  if (user) {
    callback(null, user);
  } else {
    callback("********************Su usuario no ha sido encontrado********************", null);
  }
}

// Ejemplo usando el ID de uno de los Users
const userId = "1322563365"; 

findUserById(userId, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log("********************Su usuario ha sido encontrado:********************");
    console.log(`Nombre: ${user.name}`);
    console.log(`Apellido: ${user.Lname}`);
    console.log(`Teléfono: ${user.Phone}`);
    console.log(`Cédula: ${user.idCard}`);
  }
});
