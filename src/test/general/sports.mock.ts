import { IResSports, ISports } from "src/models/general/sports.interface";

// Data request
export const MockSports: ISports = {
  title: "Ciclismo",
  description: "Este deporte es ciclismo",
};
// Data Response
export const MockGetSports: ISports = {
  id: "1",
  title: "Ciclismo",
  description: "Este deporte es ciclismo",
};
export const MockGetAllSports: ISports[] = [
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
  {
    id: "5",
    title: "Atletismo2",
    description: "Este deporte es atletismo2",
  },
  {
    id: "6",
    title: "Levantamiento de pesas2",
    description: "Este deporte es levantamiento de pesas2",
  },
  {
    id: "7",
    title: "Ciclismo3",
    description: "Este deporte es ciclismo3",
  },
  {
    id: "8",
    title: "Atletismo3",
    description: "Este deporte es atletismo3",
  },
  {
    id: "9",
    title: "Levantamiento de pesas3",
    description: "Este deporte es levantamiento de pesas3",
  },
];

// Response
export const MockResSuccessGetSports: IResSports = {
  response: MockGetSports,
  success: true,
  message: "message",
};
export const MockResSuccessGetAllSports: IResSports = {
  responseAll: MockGetAllSports,
  success: true,
  message: "message",
};

export const MockResSuccessSports: IResSports = {
  success: true,
  message: "message",
};
export const MockResErrorSports: IResSports = {
  success: false,
  message: "Error Sports",
};
