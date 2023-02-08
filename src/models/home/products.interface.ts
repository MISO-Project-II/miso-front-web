import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IProducts {
  id?: string;
  title: string;
  description: string;
  aproxDelivery: string; // horas
  price: string; // pesos colombianos Ej: 15000
  serviceType: string;
  thirdId: string;
  img?: string;
  stock?: string;
}
export interface IReqProducts extends IGenericRequest {
  request?: IProducts;
}
export interface IResProducts extends IGenericResponse {
  response?: IProducts;
  responseAll?: IProducts[];
}
export interface IObjective {
  name: string;
}
