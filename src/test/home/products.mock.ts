import { IResProducts, IProducts } from "src/models/home/products.interface";

// Data request
export const MockProduct: IProducts = {
  id: 1,
  title: "Llantas de bicicleta",
  description: "Este producto es llantas de bicicleta Rin 16",
  aproxDelivery: "2",
  price: "15000",
  serviceType: "TRANSPORT",
  thirdId: "1",
};
// Data Response
export const MockGetProducts: IProducts[] = [
  {
    id: 1,
    title: "Llantas de bicicleta1",
    description: "Este producto es llantas de bicicleta Rin 16",
    aproxDelivery: "2",
    price: "15000",
    serviceType: "TRANSPORT",
    thirdId: "1",
  },
  {
    id: 2,
    title: "Kit medico2",
    description: "Este producto es Kit medico",
    aproxDelivery: "1",
    price: "50000",
    serviceType: "HEALT",
    thirdId: "2",
  },
  {
    id: 3,
    title: "Equipo de bicicleta3",
    description: "Este producto es Equipo de bicicleta",
    aproxDelivery: "48",
    price: "150000",
    serviceType: "TRANSPORT",
    thirdId: "3",
  },
  {
    id: 4,
    title: "Llantas de bicicleta4",
    description: "Este producto es llantas de bicicleta Rin 16",
    aproxDelivery: "2",
    price: "15000",
    serviceType: "TRANSPORT",
    thirdId: "1",
  },
  {
    id: 5,
    title: "Kit medico5",
    description: "Este producto es Kit medico",
    aproxDelivery: "1",
    price: "50000",
    serviceType: "HEALT",
    thirdId: "2",
  },
  {
    id: 6,
    title: "Equipo de bicicleta6",
    description: "Este producto es Equipo de bicicleta",
    aproxDelivery: "48",
    price: "150000",
    serviceType: "TRANSPORT",
    thirdId: "3",
  },
];
export const MockGetProductsRegistered: IProducts[] = [
  {
    id: 2,
    title: "Kit medico2",
    description: "Este producto es Kit medico",
    aproxDelivery: "1",
    price: "50000",
    serviceType: "HEALT",
    thirdId: "2",
  },
  {
    id: 3,
    title: "Equipo de bicicleta3",
    description: "Este producto es Equipo de bicicleta",
    aproxDelivery: "48",
    price: "150000",
    serviceType: "TRANSPORT",
    thirdId: "3",
  },
];
// Response
export const MockResSuccessGetProducts: IResProducts = {
  result: MockGetProducts,
  success: true,
  message: "Message Ok Products",
};
export const MockResSuccessGetProductsRegistered: IResProducts = {
  result: MockGetProductsRegistered,
  success: true,
  message: "Message Ok Products Registered",
};

export const MockResErrorProducts: IResProducts = {
  success: false,
  message: "Message Error Products",
  result: null,
};
