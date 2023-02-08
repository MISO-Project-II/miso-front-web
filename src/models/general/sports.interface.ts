import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISports {
  id?: string;
  title: string;
  description: string;
}
export interface IReqSports extends IGenericRequest {
  request?: ISports;
}
export interface IResSports extends IGenericResponse {
  response?: ISports;
  responseAll?: ISports[];
}
