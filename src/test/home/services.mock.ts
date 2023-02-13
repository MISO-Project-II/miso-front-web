import { IResServices, IServices } from "src/models/home/services.interface";

// Data request
export const MockEvent: IServices = {
  id: 2,
  name: "string",
  description: "string",
  idUserCreator: 2,
  idSport: 1,
  price: 0.0,
  contract: "FREE",
};
// Data Response
export const MockGetServices: IServices[] = [
  {
    id: 1,
    name: "Servicio1",
    description: "Servicio1",
    idUserCreator: 1,
    idSport: 1,
    price: 1000,
    contract: "FREE",
  },
  {
    id: 2,
    name: "Servicio2",
    description: "Servicio2",
    idUserCreator: 2,
    idSport: 2,
    price: 2000,
    contract: "FREE",
  },
  {
    id: 3,
    name: "Servicio3",
    description: "Servicio3",
    idUserCreator: 3,
    idSport: 3,
    price: 3000,
    contract: "FREE",
  },
  {
    id: 4,
    name: "Servicio4",
    description: "Servicio4",
    idUserCreator: 4,
    idSport: 4,
    price: 4000,
    contract: "FREE",
  },
  {
    id: 5,
    name: "Servicio5",
    description: "Servicio5",
    idUserCreator: 5,
    idSport: 5,
    price: 6000,
    contract: "FREE",
  },
  {
    id: 6,
    name: "Servicio6",
    description: "Servicio6",
    idUserCreator: 6,
    idSport: 6,
    price: 6000,
    contract: "FREE",
  },
  {
    id: 7,
    name: "Servicio7",
    description: "Servicio7",
    idUserCreator: 7,
    idSport: 7,
    price: 7000,
    contract: "FREE",
  },
  {
    id: 8,
    name: "Servicio8",
    description: "Servicio8",
    idUserCreator: 8,
    idSport: 8,
    price: 8000,
    contract: "FREE",
  },
  {
    id: 9,
    name: "Servicio9",
    description: "Servicio9",
    idUserCreator: 9,
    idSport: 9,
    price: 9000,
    contract: "FREE",
  },
];
export const MockGetServicesRegistered: IServices[] = [
  {
    id: 1,
    name: "Servicio1",
    description: "Servicio1",
    idUserCreator: 1,
    idSport: 1,
    price: 1000,
    contract: "FREE",
  },
  {
    id: 2,
    name: "Servicio2",
    description: "Servicio2",
    idUserCreator: 2,
    idSport: 2,
    price: 2000,
    contract: "FREE",
  },
];
// Response
export const MockResSuccessGetServices: IResServices = {
  result: MockGetServices,
  success: true,
  message: "Message Ok Services",
};
export const MockResSuccessGetServicesRegistered: IResServices = {
  result: MockGetServicesRegistered,
  success: true,
  message: "Message Ok Services Registered",
};

export const MockResErrorServices: IResServices = {
  success: false,
  message: "Message Error Services",
  result: null,
};
