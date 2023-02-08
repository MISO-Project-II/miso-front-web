import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IServices {
  id?: string;
  title: string;
  description: string;
  objectives?: IObjective[];
  manager: string;
  contact: string;
  thirdId: string;
}
export interface IReqServices extends IGenericRequest {
  request?: IServices;
}
export interface IResServices extends IGenericResponse {
  response?: IServices;
  responseAll?: IServices[];
}
export interface IObjective {
  name: string;
}
