import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IThirdData {
  id?: string;
  title: string;
  description: string;
}
export interface IReqThirdData extends IGenericRequest {
  request?: IThirdData;
}
export interface IResThirdData extends IGenericResponse {
  response?: IThirdData;
  responseAll?: IThirdData[];
}
