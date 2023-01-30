import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IPains {
  id?: string;
  title: string;
  description: string;
}
export interface IReqPains extends IGenericRequest {
  request?: IPains;
}
export interface IResPains extends IGenericResponse {
  response?: IPains;
  responseAll?: IPains[];
}
