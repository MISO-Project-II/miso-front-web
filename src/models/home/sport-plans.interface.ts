import { IGenericRequest, IGenericResponse } from "../local/generic.interface";
import { ITrainingRoutines } from "../routines/training-routines.interface";

export interface ISportPlans {
  id?: string;
  title: string;
  description: string;
  trainigRoutines?: ITrainingRoutines[];
}
export interface IReqSportPlans extends IGenericRequest {
  request?: ISportPlans;
}
export interface IResSportPlans extends IGenericResponse {
  response?: ISportPlans;
  responseAll?: ISportPlans[];
}
