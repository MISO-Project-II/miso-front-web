import {
  IResProducts,
  IProducts,
  IResUserProducts,
} from "src/models/home/products.interface";

// Data request
export const MockProduct: IProducts = {
  idProduct: 1,
  idUserCreator: 1,
  idSport: 1,
  name: "Producto 1",
  description: "Esto es Producto 1",
  contractType: "FREE_CONTRACT",
  eventType: "OUTSIDE_OF_HOUSE",
};
// Data Response
export const MockGetProducts: IProducts[] = [
  {
    idProduct: 1,
    idUserCreator: 1,
    idSport: 1,
    name: "Producto 1",
    description: "Esto es Producto 1",
    price: 10.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    idProduct: 2,
    idUserCreator: 1,
    idSport: 2,
    name: "Producto 2",
    description: "Esto es Producto 2",
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    idProduct: 3,
    idUserCreator: 1,
    idSport: 3,
    name: "Producto 3",
    description: "Esto es Producto 3",
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    idProduct: 4,
    idUserCreator: 1,
    idSport: 4,
    name: "Producto 4",
    description: "Esto es Producto 4",
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    idProduct: 5,
    idUserCreator: 1,
    idSport: 5,
    name: "Producto 5",
    description: "Esto es Producto 5",
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    idProduct: 6,
    idUserCreator: 1,
    idSport: 1,
    name: "Producto 6",
    description: "Esto es Producto 6",
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
];

// Response
export const MockResSuccessGetProducts: IResProducts = {
  result: MockGetProducts,
  success: true,
  message: "Message Ok Products",
};

export const MockResErrorProducts: IResProducts = {
  success: false,
  message: "Message Error Products",
  result: null,
};
// XXX
export const MockGetUserProductsConsume: IResUserProducts = {
  message: "success",
  success: true,
  result: {
    idUser: 1,
    "produce-product": [
      {
        name: "Sujetador deportivo",
        idProduct: 5,
        idUserCreator: 1,
        idSport: 1,
        description: "Sujetador deportivo en todas las tallas",
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
      },
      {
        name: "Bicicleta estatica",
        idProduct: 6,
        idUserCreator: 1,
        idSport: 5,
        description: "Bicicleta estatica para el hogar",
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
      },
      {
        name: "Mancuernas",
        idProduct: 7,
        idUserCreator: 1,
        idSport: 5,
        description: "Mancuernas de diferentes kilos",
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
      },
    ],
  },
};
