import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISuggestionFoodPlan {
  id?: string;
  title: string;
  description: string;
}
export interface IReqSuggestionFoodPlan extends IGenericRequest {
  request?: ISuggestionFoodPlan;
}
export interface IResSuggestionFoodPlan extends IGenericResponse {
  response?: ISuggestionFoodPlan;
}
