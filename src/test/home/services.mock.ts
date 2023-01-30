import { IResServices, IServices } from "src/models/home/services.interface";

// Data request
export const MockServices: IServices = {
  title: "Transporte de bicicletas o elementos deportivos",
  description:
    "Este servicio es Transporte de bicicletas o elementos deportivos",
  objectives: [
    {
      name: "Transporte",
    },
    {
      name: "Alimentacion",
    },
  ],
  manager: "Miguel Niño",
  contact: "3111234567",
  thirdId: "1",
};
// Data Response
export const MockGetServices: IServices = {
  id: "1",
  title: "Transporte de bicicletas o elementos deportivos",
  description:
    "Este servicio es Transporte de bicicletas o elementos deportivos",
  objectives: [
    {
      name: "Transporte",
    },
    {
      name: "Alimentacion",
    },
  ],
  manager: "Miguel Niño",
  contact: "3111234567",
  thirdId: "1",
};
export const MockGetAllServices: IServices[] = [
  {
    id: "1",
    title: "Transporte de bicicletas o elementos deportivos",
    description:
      "Este servicio es Transporte de bicicletas o elementos deportivos",
    objectives: [
      {
        name: "Transporte",
      },
      {
        name: "Alimentacion",
      },
    ],
    manager: "Miguel Niño",
    contact: "3111234567",
    thirdId: "1",
  },
  {
    id: "2",
    title: "Entrenador/deportólogo",
    description: "Este servicio es Entrenador/deportólogo",
    objectives: [
      {
        name: "Comunicacion constante",
      },
      {
        name: "Atencion preferencial",
      },
    ],
    manager: "Miguel Niño",
    contact: "3111234567",
    thirdId: "2",
  },
  {
    id: "3",
    title: "Envio de alimentacion",
    description: "Este servicio es Envio de alimentacion",
    objectives: [
      {
        name: "Desayuno",
      },
      {
        name: "Almuerzo",
      },
      {
        name: "Cena",
      },
    ],
    manager: "Miguel Niño",
    contact: "3111234567",
    thirdId: "3",
  },
];

// Response
export const MockResSuccessGetServices: IResServices = {
  response: MockGetServices,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllServices: IResServices = {
  responseAll: MockGetAllServices,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessServices: IResServices = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorServices: IResServices = {
  success: false,
  errorMessage: "Error Services",
  date: new Date(),
};
