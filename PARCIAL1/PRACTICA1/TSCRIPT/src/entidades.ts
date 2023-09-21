interface usersI {
  password: string;
  name: string;
  Lname: string;
  Phone: number;
  idCard: number;
}

// Creación de entidad con sus respectivos arreglos

export const Users: usersI[] = [
  {
    password: "12345",
    name: "Greily Yurany",
    Lname: "Bravo Delgado",
    Phone: 996589645,
    idCard: 1322563365,
  },
  {
    password: "151651",
    name: "Joseph Hamilton",
    Lname: "Ponce Vásquez",
    Phone: 956832100,
    idCard: 13155688452,
  },
  {
    password: "445872",
    name: "Jamileth Estela",
    Lname: "Anchundia Anchundia",
    Phone: 996568621,
    idCard: 1311220320,
  },
];

// Exportar el arreglo de usuarios
export default Users;
