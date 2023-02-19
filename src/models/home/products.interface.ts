import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IProducts {
  idProduct?: number;
  idUserCreator: number;
  idSport: number;
  name: string;
  description: string;
  price?: number;
}
export interface IResProducts extends IGenericResponse {
  result: IProducts[] | null;
}
export interface IResProduct extends IGenericResponse {
  result: IProducts | null;
}
export interface IResUserProducts extends IGenericResponse {
  created: IProducts[] | null;
  consume: IProducts[] | null;
}
