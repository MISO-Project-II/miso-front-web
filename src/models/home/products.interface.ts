import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IProducts {
  idProduct?: number;
  name: string;
  description: string;
  price?: number;
  idUserCreator: number;
  idSport: number;
  contractType: string;
  eventType: string;
}
export interface IResProducts extends IGenericResponse {
  result: IProducts[] | null;
}
export interface IResProduct extends IGenericResponse {
  result: IProducts | null;
}
export interface IResUserProducts extends IGenericResponse {
  result: {
    idUser?: number;
    "produce-product"?: IProducts[]; // /users/{{id_third}}/product/created
    "consume-product"?: IProducts[]; // /users/{{id_sportsman}}/product/consume
  };
}
