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
  },
  {
    idProduct: 2,
    idUserCreator: 1,
    idSport: 2,
    name: "Producto 2",
    description: "Esto es Producto 2",
  },
  {
    idProduct: 3,
    idUserCreator: 1,
    idSport: 3,
    name: "Producto 3",
    description: "Esto es Producto 3",
  },
  {
    idProduct: 4,
    idUserCreator: 1,
    idSport: 4,
    name: "Producto 4",
    description: "Esto es Producto 4",
  },
  {
    idProduct: 5,
    idUserCreator: 1,
    idSport: 5,
    name: "Producto 5",
    description: "Esto es Producto 5",
  },
  {
    idProduct: 6,
    idUserCreator: 1,
    idSport: 1,
    name: "Producto 6",
    description: "Esto es Producto 6",
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
      },
      {
        name: "Bicicleta estatica",
        idProduct: 6,
        idUserCreator: 1,
        idSport: 5,
        description: "Bicicleta estatica para el hogar",
      },
      {
        name: "Mancuernas",
        idProduct: 7,
        idUserCreator: 1,
        idSport: 5,
        description: "Mancuernas de diferentes kilos",
      },
    ],
  },
};
