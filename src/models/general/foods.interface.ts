import { IGenericRequest, IGenericResponse } from "../local/generic.interface";
import { ICity } from "./countryStateCity.interface";

export interface IFoods {
  id?: string;
  title: string;
  description: string;
  calories: string;
  category: string;
  city: ICity;
}
export interface IReqFoods extends IGenericRequest {
  request?: IFoods;
}
export interface IResFoods extends IGenericResponse {
  response?: IFoods;
  responseAll?: IFoods[];
}
