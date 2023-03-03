import { IGenericRequest, IGenericResponse } from "../local/generic.interface";
import { ITrainingRoutines } from "../routines/training-routines.interface";

export interface ISportPlans {
  id?: string;
  title: string;
  description: string;
  trainigRoutines?: ITrainingRoutines[];
}
export interface IResSportPlans extends IGenericResponse {
  result: ISportPlans[] | null;
}
