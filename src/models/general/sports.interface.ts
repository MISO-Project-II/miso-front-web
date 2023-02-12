import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ISports {
  idsports: number;
  name: string;
  description?: string;
}
export interface IResSports extends IGenericResponse {
  results: ISports[] | null;
}
