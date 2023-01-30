import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISuggestionRoutes {
  id?: string;
  title: string;
  description: string;
}
export interface IReqSuggestionRoutes extends IGenericRequest {
  request?: ISuggestionRoutes;
}
export interface IResSuggestionRoutes extends IGenericResponse {
  response?: ISuggestionRoutes;
}
