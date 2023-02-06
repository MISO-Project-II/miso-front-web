import { IExercises } from "../general/exercises.interface";
import { IObjective } from "../home/services.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ITrainingRoutines {
  id?: string;
  title: string;
  description: string;
  calories: number;
  time: number;
  objectives?: IObjective[];
  category: string;
  exercises?: IExercises[];
}
export interface IReqTrainingRoutines extends IGenericRequest {
  request?: ITrainingRoutines;
}
export interface IResTrainingRoutines extends IGenericResponse {
  response?: ITrainingRoutines;
  responseAll?: ITrainingRoutines[];
}
