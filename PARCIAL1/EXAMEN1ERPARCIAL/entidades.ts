//Interfaz propuesta

export interface ITvShow {
    id:number;
    name:string;
    director:string;
    investment: number;
    cast: string;
    seasons: ISeason [];
}

export interface ISeason {
    id: number;
    description: string;
    episodesNumber: number,
    tvshowId: number;
}


//Definir un arreglo con 3 elementos que obedezcan a las interfaces propuestas 
     const tvShows: ITvShow[] = [
         {
           id: 1,
           name: "Show 1",
          director: "Director 1",
           investment: 1000000,
           cast: "Actor 1, Actor 2",
           seasons: [
             {
               id: 1,
               description: "Season 1",
               episodesNumber: 10,
               tvshowId: 1,
            },
             {
               id: 2,
               description: "Season 2",
               episodesNumber: 12,
               tvshowId: 1,
             },
           ],
         },
         {
           id: 2,
           name: "Show 2",
           director: "Director 2",
           investment: 1500000,
           cast: "Actor 3, Actor 4",
          seasons: [
            {
              id: 3,
              description: "Season 1",
              episodesNumber: 8,
              tvshowId: 2,
            },
          ],
        },
        {
          id: 3,
          name: "Show 3",
          director: "Director 3",
          investment: 1200000,
          cast: "Actor 5, Actor 6",
          seasons: [
            {
              id: 4,
              description: "Season 1",
              episodesNumber: 15,
              tvshowId: 3,
            },
          ],
        },
      ];
      
//Crear y llamar una funcion que reciba 2 parametros 
//a)arreglo de objetos del tipo interfaz propuesta,
//b)inversion referencial. 
//y devuelva todos los TV Shows con una inversion menor a la referencial recibida como parametro.
//al momento de llamar esta funcion utilizar callback para mostrar por consola

//              Arreglo

// Función para buscar TV SHOW por ID usando callback
function findITvShowById(investmen, callback) {
    const tvshows = tvShows.find((ele) => ele.investment < investmen);
    if (tvShows) {
      callback(null, tvShows);
    } else {
      callback("********************Su TV Show no ha sido encontrado********************", null);
    }
  }
  
  
  const tvshowIdId = "3"; 
  
  findITvShowById(tvshowIdId, (error, tvShows) => {
    if (error) {
      console.error(error);
    } else {
      console.log("********************Su TV Show ha sido encontrado********************");
      console.log(`Nombre: ${tvShows.name}`);
      console.log(`Director: ${tvShows.director}`);
      console.log(`Cast: ${tvShows.cast}`);
      console.log(`investmen: ${tvShows.investment}`);
    }
  });

