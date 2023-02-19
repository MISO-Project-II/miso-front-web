import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IEvents {
  idEvent?: number;
  name: string;
  date: string;
  description: string;
  city: string;
  idSport: number;
  idUserCreator: number;
  contractType: string;
  eventType: string;
  price?: number;
}
export interface IResEvents extends IGenericResponse {
  result: IEvents[] | null;
}
export interface IResEvent extends IGenericResponse {
  result: IEvents | null;
}
