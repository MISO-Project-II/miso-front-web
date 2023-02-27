import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IEvents {
  idEvent?: number;
  name: string;
  description: string;
  date: string;
  city: string;
  price?: number;
  idUserCreator: number;
  idSport: number;
  contractType: string;
  eventType?: string;
  evenType?: string;
}
export interface IResEvents extends IGenericResponse {
  result: IEvents[] | null;
}
export interface IResEvent extends IGenericResponse {
  result: IEvents | null;
}
export interface IResUserEvents extends IGenericResponse {
  result: {
    idUser?: number;
    "produce-event"?: IEvents[]; // /users/{{id_third}}/event/created
    "consume-event"?: IEvents[]; // /users/{{id_sportsman}}/event/consume
  };
}
