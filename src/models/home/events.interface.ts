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
export interface IReqEvent {
  title: string;
  description: string;
  startPlace: string;
  destinyPlace: string;
  date: Date;
  eventCategoryId: string;
  thirdId: string;
}
export interface IResEvents extends IGenericResponse {
  result: IEvents[] | null;
}
