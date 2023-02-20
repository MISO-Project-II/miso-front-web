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
export interface IResUserProducts {
  name: string;
  idUser: number;
  lastName: string;
  identificationNumber: number;
  "produce-product": IProducts[] | null; // /users/{{id_third}}/product/created
  "consume-product": IProducts[] | null; // /users/{{id_sportsman}}/product/consume
}
