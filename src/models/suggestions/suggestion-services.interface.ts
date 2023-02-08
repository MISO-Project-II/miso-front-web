import { IObjective } from "../home/services.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISuggestionServices {
  id?: string;
  title: string;
  description: string;
  objectives?: IObjective[];
  manager: string;
  contact: string;
  thirdId: string;
}
export interface IReqSuggestionServices extends IGenericRequest {
  request?: ISuggestionServices;
}
export interface IResSuggestionServices extends IGenericResponse {
  response?: ISuggestionServices;
}
