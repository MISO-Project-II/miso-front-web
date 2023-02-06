import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISuggestionEvents {
  id?: string;
  title: string;
  description: string;
  startPlace: string;
  destinyPlace?: string;
  date: Date;
  eventCategoryId: string;
  thirdId: string;
}
export interface IReqSuggestionEvents extends IGenericRequest {
  request?: ISuggestionEvents;
}
export interface IResSuggestionEvents extends IGenericResponse {
  response?: ISuggestionEvents;
}
