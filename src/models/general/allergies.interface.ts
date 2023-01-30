import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IAllergies {
  id?: string;
  title: string;
  description: string;
}
export interface IReqAllergies extends IGenericRequest {
  request?: IAllergies;
}
export interface IResAllergies extends IGenericResponse {
  response?: IAllergies;
  responseAll?: IAllergies[];
}
