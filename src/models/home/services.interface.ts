import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IServices {
  id?: number;
  name: string;
  description: string;
  price: number;
  idUserCreator: number;
  idSport: number;
  contract?: string;
  serviceType?: string;
}
export interface IResServices extends IGenericResponse {
  result: IServices[] | null;
}
export interface IResService extends IGenericResponse {
  result: IServices | null;
}
export interface IResUserServices extends IGenericResponse {
  result: {
    idUser?: number;
    "produce-services"?: IServices[]; // /users/{{id_third}}/service/created
    "consume-services"?: IServices[]; // /users/{{id_sportsman}}/service/consume
  };
}
