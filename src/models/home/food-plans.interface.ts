import { IGenericRequest, IGenericResponse } from "../local/generic.interface";
import { IFoodRoutines } from "../routines/food-routines.interface";

export interface IFoodPlans {
  id?: string;
  title: string;
  description: string;
  foodRoutines: IFoodRoutines[];
}
export interface IReqFoodPlans extends IGenericRequest {
  request?: IFoodPlans;
}
export interface IResFoodPlans extends IGenericResponse {
  response?: IFoodPlans;
  responseAll?: IFoodPlans[];
}
