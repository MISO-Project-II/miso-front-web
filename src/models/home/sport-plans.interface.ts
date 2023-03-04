import { IGenericRequest, IGenericResponse } from "../local/generic.interface";
import { ISportRoutines } from "../routines/sport-routines.interface";

export interface ISportPlans {
  id?: string;
  title: string;
  description: string;
  trainigRoutines?: ISportRoutines[];
}
export interface IResSportPlans extends IGenericResponse {
  result: ISportPlans[] | null;
}
