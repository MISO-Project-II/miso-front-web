import { IEvents } from "../home/events.interface";
import { IFoodPlans } from "../home/food-plans.interface";
import { IProducts } from "../home/products.interface";
import { IServices } from "../home/services.interface";
import { ISportPlans } from "../home/sport-plans.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IUserData {
  id?: string;
  user: string;
  name: string;
  lastName: string;
  IdType: string;
  IdNumber: number;
  genre: string;
  age: number;
  weight: number;
  height: number;
  plan?: string;
  events?: IEvents[];
  sportPlan?: ISportPlans;
  foodPlan?: IFoodPlans;
  products?: IProducts[];
  services?: IServices[];
}
export interface IReqUserData extends IGenericRequest {
  request?: IUserData;
}
export interface IResUserData extends IGenericResponse {
  response?: IUserData;
}
