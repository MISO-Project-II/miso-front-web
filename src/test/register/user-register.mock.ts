import {
  IResUserRegister,
  IUserRegister,
} from "src/models/register/user-register.interface";

export const MockUserRegister: IUserRegister = {
  user: "Miguel",
  pass: "12345",
  confirmation: "12345",
  name: "Miguel ",
  lastName: "Niño",
  IdType: "CC",
  IdNumber: 123456,
  sportPractice: [
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
  ],
  sportInterest: [
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
  ],
  genre: "M",
  age: 30,
  weight: 80,
  height: 165,
  countryOfBirth: {
    id: 48,
    name: "Colombia",
    iso2: "CO",
  },
  stateOfBirth: {
    id: 2903,
    name: "Boyacá",
    iso2: "BOY",
  },
  cityOfBirth: {
    id: 21553,
    name: "Tunja",
  },
  countryOfResidence: {
    id: 48,
    name: "Colombia",
    iso2: "CO",
  },
  stateOfResidence: {
    id: 4921,
    name: "Bogotá D.C.",
    iso2: "DC",
  },
  cityOfResidence: {
    id: 149237,
    name: "Bogotá D.C.",
  },
  yearsOfResidence: 2,
};

export const MockResSuccessUserRegister: IResUserRegister = {
  success: true,
  message: "",
};
export const MockResErrorUserRegister: IResUserRegister = {
  success: false,
  message: "Error user register",
};
