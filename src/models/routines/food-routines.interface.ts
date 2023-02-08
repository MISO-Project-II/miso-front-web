import { IFoods } from "../general/foods.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IFoodRoutines {
  id?: string;
  title: string;
  description: string;
  foods?: IFoods[];
}
export interface IReqFoodRoutines extends IGenericRequest {
  request?: IFoodRoutines;
}
export interface IResFoodRoutines extends IGenericResponse {
  response?: IFoodRoutines;
  responseAll?: IFoodRoutines[];
}
