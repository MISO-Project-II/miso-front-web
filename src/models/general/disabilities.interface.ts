import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IDisabilities {
  id?: string;
  title: string;
  description: string;
}
export interface IReqDisabilities extends IGenericRequest {
  request?: IDisabilities;
}
export interface IResDisabilities extends IGenericResponse {
  response?: IDisabilities;
  responseAll?: IDisabilities[];
}
