import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISports {
  idsports: number;
  name: string;
  description?: string;
  sportType?: string;
}
export interface IResSports extends IGenericResponse {
  result: ISports[] | null;
}
