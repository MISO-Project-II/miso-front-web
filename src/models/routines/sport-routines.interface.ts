import { IExercises } from "../general/exercises.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISportRoutines {
  id?: string;
  title: string;
  description: string;
  calories: number;
  time: number;
  category: string;
  exercises?: IExercises[];
}
export interface IReqSportRoutines extends IGenericRequest {
  request?: ISportRoutines;
}
export interface IResSportRoutines extends IGenericResponse {
  response?: ISportRoutines;
  responseAll?: ISportRoutines[];
}
