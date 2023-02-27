import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IPlan {
  id?: string;
  contractType: string;
}
export interface IReqPlan extends IGenericRequest {
  request?: IPlan;
}
export interface IResPlan extends IGenericResponse {
  response?: IPlan;
}
