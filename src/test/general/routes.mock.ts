import { IResRoutes, IRoutes } from "src/models/general/routes.interface";

// Data request
export const MockRoutes: IRoutes = {
  title: "Ruta 1",
  description: "Esta es ruta 1",
  startPlace: "Plaza central",
  destinyPlace: "Parque norte",
};
// Data Response
export const MockGetRoutes: IRoutes = {
  id: "1",
  title: "Ruta 1",
  description: "Esta es ruta 1",
  startPlace: "Plaza central",
  destinyPlace: "Parque norte",
};
export const MockGetAllRoutes: IRoutes[] = [
  {
    id: "1",
    title: "Ruta 1",
    description: "Esta es ruta 1",
    startPlace: "Plaza central",
    destinyPlace: "Parque norte",
  },
  {
    id: "2",
    title: "Ruta 1",
    description: "Esta es ruta 2",
    startPlace: "Plaza central",
    destinyPlace: "Parque norte",
  },
  {
    id: "3",
    title: "Ruta 1",
    description: "Esta es ruta 3",
    startPlace: "Plaza central",
    destinyPlace: "Parque norte",
  },
];

// Response
export const MockResSuccessGetRoutes: IResRoutes = {
  response: MockGetRoutes,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllRoutes: IResRoutes = {
  responseAll: MockGetAllRoutes,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessRoutes: IResRoutes = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorRoutes: IResRoutes = {
  success: false,
  errorMessage: "Error Routes",
  date: new Date(),
};
