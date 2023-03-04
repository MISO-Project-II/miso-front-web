import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISuggestionSportPlan {
  id?: string;
  title: string;
  description: string;
}
export interface IReqSuggestionSportPlan extends IGenericRequest {
  request?: ISuggestionSportPlan;
}
export interface IResSuggestionSportPlan extends IGenericResponse {
  response?: ISuggestionSportPlan;
}
