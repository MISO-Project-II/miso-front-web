import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IRoutes {
  id?: number;
  title: string;
  description: string;
  idStartPlace: number;
  startPlace: string;
  destinyPlace: string;
  urlRoute: string;
  distance: number;
}
export interface IResRoutes extends IGenericResponse {
  result: IRoutes[] | null;
}
