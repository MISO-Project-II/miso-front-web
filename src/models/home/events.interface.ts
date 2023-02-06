import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IEvents {
  id?: string;
  title: string;
  description: string;
  startPlace: string;
  destinyPlace?: string;
  date: Date;
  eventCategoryId: string;
  thirdId: string;
}
export interface IReqEvents extends IGenericRequest {
  request?: IEvents;
}
export interface IResEvents extends IGenericResponse {
  response?: IEvents;
  responseAll?: IEvents[];
}
