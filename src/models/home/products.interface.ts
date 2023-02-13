import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IProducts {
  id?: number;
  title: string;
  description: string;
  aproxDelivery: string; // horas
  price: string; // pesos colombianos Ej: 15000
  serviceType: string;
  thirdId: string;
  img?: string;
  stock?: string;
}
export interface IReqProduct {
  title: string;
  description: string;
  aproxDelivery: string; // horas
  price: string; // pesos colombianos Ej: 15000
  serviceType: string;
  thirdId: string;
  img?: string;
  stock?: string;
}
export interface IResProducts extends IGenericResponse {
  result: IProducts[] | null;
}
