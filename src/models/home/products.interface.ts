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
  result?: IProducts[] | null;
}
