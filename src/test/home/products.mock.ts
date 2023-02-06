import { IResProducts, IProducts } from "src/models/home/products.interface";

// Data request
export const MockProducts: IProducts = {
  title: "Llantas de bicicleta",
  description: "Este producto es llantas de bicicleta Rin 16",
  aproxDelivery: "2",
  price: "15000",
  serviceType: "TRANSPORT",
  thirdId: "1",
};
// Data Response
export const MockGetProducts: IProducts = {
  id: "1",
  title: "Llantas de bicicleta",
  description: "Este producto es llantas de bicicleta Rin 16",
  aproxDelivery: "2",
  price: "15000",
  serviceType: "TRANSPORT",
  thirdId: "1",
};
export const MockGetAllProducts: IProducts[] = [
  {
    id: "1",
    title: "Llantas de bicicleta",
    description: "Este producto es llantas de bicicleta Rin 16",
    aproxDelivery: "2",
    price: "15000",
    serviceType: "TRANSPORT",
    thirdId: "1",
  },
  {
    id: "2",
    title: "Kit medico",
    description: "Este producto es Kit medico",
    aproxDelivery: "1",
    price: "50000",
    serviceType: "HEALT",
    thirdId: "2",
  },
  {
    id: "3",
    title: "Equipo de bicicleta",
    description: "Este producto es Equipo de bicicleta",
    aproxDelivery: "48",
    price: "150000",
    serviceType: "TRANSPORT",
    thirdId: "3",
  },
];

// Response
export const MockResSuccessGetProducts: IResProducts = {
  response: MockGetProducts,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllProducts: IResProducts = {
  responseAll: MockGetAllProducts,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessProducts: IResProducts = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorProducts: IResProducts = {
  success: false,
  errorMessage: "Error Products",
  date: new Date(),
};
