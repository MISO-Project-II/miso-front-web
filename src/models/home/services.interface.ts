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
export interface IResUserServices {
  name: string;
  idUser: number;
  lastName: string;
  identificationNumber: number;
  "produce-services": IServices[] | null; // /users/{{id_third}}/service/created
  "consume-services": IServices[] | null; // /users/{{id_sportsman}}/service/consume
}
