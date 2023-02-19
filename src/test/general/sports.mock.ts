import { IResSports, ISports } from "src/models/general/sports.interface";

// Data request
export const MockGetSport: ISports = {
  description:
    "Está considerado como uno de los ejercicios más completos para la salud. Con 30 minutos quemaremos 517 calorías y trabajaremos todo el cuerpo de manera completa. Conseguiremos aumentar la resistencia del cuerpo y la flexibilidad del abdomen.",
  idsports: 1,
  name: "Squash",
};
// Data Response
export const MockGetSports: ISports[] = [
  {
    idsports: 1,
    name: "Futbol",
    description: "Esto es Futbol",
    sportType: "SPORTS_INTEREST",
  },
  {
    idsports: 2,
    name: "Pesas",
    description: "Esto es Pesas",
    sportType: "SPORTS_INTEREST",
  },
  {
    idsports: 3,
    name: "Ciclismo",
    description: "Esto es Ciclismo",
    sportType: "SPORTS_INTEREST",
  },
  {
    idsports: 4,
    name: "Caminata",
    description: "Esto es Caminata",
    sportType: "SPORTS_INTEREST",
  },
  {
    idsports: 5,
    name: "Trote",
    description: "Esto es Trote",
    sportType: "SPORTS_INTEREST",
  },
  {
    idsports: 5,
    name: "Correr",
    description: "Esto es Correr",
    sportType: "SPORTS_INTEREST",
  },
];

// Response
export const MockResSuccessGetSports: IResSports = {
  result: MockGetSports,
  success: true,
  message: "Message Ok Sports",
};

export const MockResErrorSports: IResSports = {
  success: false,
  message: "Message Error Sports",
  result: null,
};
