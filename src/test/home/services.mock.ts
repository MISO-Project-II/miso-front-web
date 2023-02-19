import {
  IResServices,
  IResUserServices,
  IServices,
} from "src/models/home/services.interface";

// Data request
export const MockEvent: IServices = {
  id: 1,
  name: "Servicio 1",
  description: "Esto es Servicio 1",
  idUserCreator: 1,
  idSport: 1,
  price: 10.0,
  contract: "FREE_CONTRACT",
};
// Data Response
export const MockGetServices: IServices[] = [
  {
    id: 1,
    name: "Servicio 1",
    description: "Esto es Servicio 1",
    idUserCreator: 1,
    idSport: 1,
    price: 10.0,
    contract: "FREE_CONTRACT",
  },
  {
    id: 2,
    name: "Servicio 2",
    description: "Esto es Servicio 2",
    idUserCreator: 1,
    idSport: 2,
    price: 20,
    contract: "FREE_CONTRACT",
  },
  {
    id: 3,
    name: "Servicio 3",
    description: "Esto es Servicio 3",
    idUserCreator: 1,
    idSport: 3,
    price: 30,
    contract: "FREE_CONTRACT",
  },
  {
    id: 4,
    name: "Servicio 4",
    description: "Esto es Servicio 4",
    idUserCreator: 1,
    idSport: 4,
    price: 40,
    contract: "FREE_CONTRACT",
  },
  {
    id: 5,
    name: "Servicio 5",
    description: "Esto es Servicio 5",
    idUserCreator: 1,
    idSport: 5,
    price: 50,
    contract: "INTERMEDIATE_CONTRACT",
  },
  {
    id: 6,
    name: "Servicio 6",
    description: "Esto es Servicio 6",
    idUserCreator: 1,
    idSport: 1,
    price: 60,
    contract: "INTERMEDIATE_CONTRACT",
  },
  {
    id: 7,
    name: "Servicio 7",
    description: "Esto es Servicio 7",
    idUserCreator: 1,
    idSport: 2,
    price: 70,
    contract: "INTERMEDIATE_CONTRACT",
  },
  {
    id: 8,
    name: "Servicio 8",
    description: "Esto es Servicio 8",
    idUserCreator: 1,
    idSport: 3,
    price: 80,
    contract: "PREMIUM_CONTRACT",
  },
  {
    id: 9,
    name: "Servicio 9",
    description: "Esto es Servicio 9",
    idUserCreator: 1,
    idSport: 3,
    price: 90,
    contract: "PREMIUM_CONTRACT",
  },
];
// Response
export const MockResSuccessGetServices: IResServices = {
  result: MockGetServices,
  success: true,
  message: "Message Ok Services",
};

export const MockResErrorServices: IResServices = {
  success: false,
  message: "Message Error Services",
  result: null,
};
// XXX
export const MockGetUserServicesConsume: IResUserServices = {
  success: true,
  message: "Message Ok User-Services Consume",
  created: null,
  consume: [
    {
      id: 4,
      name: "Servicio 4",
      description: "Esto es Servicio 4",
      idUserCreator: 1,
      idSport: 4,
      price: 40,
      contract: "FREE_CONTRACT",
    },
    {
      id: 5,
      name: "Servicio 5",
      description: "Esto es Servicio 5",
      idUserCreator: 1,
      idSport: 5,
      price: 50,
      contract: "INTERMEDIATE_CONTRACT",
    },
    {
      id: 8,
      name: "Servicio 8",
      description: "Esto es Servicio 8",
      idUserCreator: 1,
      idSport: 3,
      price: 80,
      contract: "PREMIUM_CONTRACT",
    },
  ],
};
