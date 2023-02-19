import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IServices {
  id?: number;
  name: string;
  description: string;
  idUserCreator: number;
  idSport: number;
  price: number;
  contract: string;
}
export interface IReqServices extends IGenericRequest {
  request?: IServices;
}
export interface IResServices extends IGenericResponse {
  result?: IServices[] | null;
}
