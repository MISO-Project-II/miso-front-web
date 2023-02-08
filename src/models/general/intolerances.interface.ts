import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IIntolerances {
  id?: string;
  title: string;
  description: string;
}
export interface IReqIntolerances extends IGenericRequest {
  request?: IIntolerances;
}
export interface IResIntolerances extends IGenericResponse {
  response?: IIntolerances;
  responseAll?: IIntolerances[];
}
