import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IExercises {
  id?: string;
  title: string;
  description: string;
  calories: string;
  timeMinutes: string;
}
export interface IReqExercises extends IGenericRequest {
  request?: IExercises;
}
export interface IResExercises extends IGenericResponse {
  response?: IExercises;
  responseAll?: IExercises[];
}
