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
export interface IResServices extends IGenericResponse {
  result: IServices[] | null;
}
export interface IResService extends IGenericResponse {
  result: IServices | null;
}
export interface IResUserServices extends IGenericResponse {
  created: IServices[] | null;
  consume: IServices[] | null;
}
