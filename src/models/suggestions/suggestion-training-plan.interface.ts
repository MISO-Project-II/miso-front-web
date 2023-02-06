import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISuggestionTrainingPlan {
  id?: string;
  title: string;
  description: string;
}
export interface IReqSuggestionTrainingPlan extends IGenericRequest {
  request?: ISuggestionTrainingPlan;
}
export interface IResSuggestionTrainingPlan extends IGenericResponse {
  response?: ISuggestionTrainingPlan;
}
