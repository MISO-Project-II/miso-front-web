import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IPlan {
  idUser?: number;
  idPlan: string;
  transaction?: string;
}
export interface IResPlan extends IGenericResponse {
  result: IPlan | null;
}
