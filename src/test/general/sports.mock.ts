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
    description:
      "Está considerado como uno de los ejercicios más completos para la salud. Con 30 minutos quemaremos 517 calorías y trabajaremos todo el cuerpo de manera completa. Conseguiremos aumentar la resistencia del cuerpo y la flexibilidad del abdomen.",
    idsports: 1,
    name: "Squash",
  },
  {
    description:
      "Es uno de los deportes más conocidos. Exige trabajar en equipo y en ocasiones concentración. Nos ayudará a ejercitar todo el cuerpo y entre otras cosas conseguirá incrementar la resistencia, la fuerza y la flexibilidad muscular.",
    idsports: 2,
    name: "Fútbol",
  },
  {
    description:
      "Catalogado por algunos como la actividad más completa. Consigue fortalecer los huesos y aporta resistencia, flexibilidad y fuerza. Antes de ponerse a nadar sería interesante aprender la técnica. Conseguirás quemar 350 calorías en media hora.",
    idsports: 3,
    name: "Natación",
  },
  {
    description:
      "Requiere el uso obligatorio de una pelota y raqueta, y puede jugarse de manera individual o en equipo.",
    idsports: 4,
    name: "Tenis",
  },
  {
    description:
      "Los participantes hacen contacto físico con sus puños utilizando guates especiales sobre algunas partes de su cuerpo. Desarrollo físico integral.",
    idsports: 5,
    name: "Boxeo",
  },
  {
    description:
      "Todo deporte que necesita de una bicicleta para su ejecución, existen diferentes modalidades, de ruta, montaña, se corre en equipo o individual.",
    idsports: 6,
    name: "Ciclismo",
  },
  {
    description:
      "Mide la capacidad física de los participantes en términos de fuerza, velocidad o distancia.",
    idsports: 7,
    name: "Atletismo",
  },
  {
    description:
      "Se juega en equipos con un balon que se debe insertar en la cesta del equipo contrario, tiene reglas definidas,",
    idsports: 8,
    name: "Baloncesto",
  },
  {
    description: "Fortalecimiento de piernas y gluteos.",
    idsports: 11,
    name: "Salto alto",
  },
  {
    description: "description example",
    idsports: 13,
    name: "example",
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
