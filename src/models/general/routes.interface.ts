import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IRoutes {
  idPath?: number;
  title: string;
  description: string;
  initPath: string;
  endPath: string;
  distance: number;
  map: string;
  imageUrl: string;
}
