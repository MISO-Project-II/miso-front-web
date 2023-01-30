import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IRoutes {
  id?: string;
  title: string;
  description: string;
  startPlace: string;
  destinyPlace?: string;
}
export interface IReqRoutes extends IGenericRequest {
  request?: IRoutes;
}
export interface IResRoutes extends IGenericResponse {
  response?: IRoutes;
  responseAll?: IRoutes[];
}
