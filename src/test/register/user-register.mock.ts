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
      id: "1",
      title: "Ciclismo",
      description: "Este deporte es ciclismo",
    },
    {
      id: "2",
      title: "Atletismo",
      description: "Este deporte es atletismo",
    },
  ],
  sportInterest: [
    {
      id: "3",
      title: "Levantamiento de pesas",
      description: "Este deporte es levantamiento de pesas",
    },
    {
      id: "4",
      title: "Ciclismo2",
      description: "Este deporte es ciclismo2",
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
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorUserRegister: IResUserRegister = {
  success: false,
  errorMessage: "Error user register",
  date: new Date(),
};
