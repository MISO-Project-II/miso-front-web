import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IUserFoodProfile {
  id?: string;
  foods_preference: string;
  intolerances: string;
  is_vegan: boolean;
  is_vegetarian: boolean;
}
export interface IReqUserFoodProfile extends IGenericRequest {
  request?: IUserFoodProfile;
}
export interface IResUserFoodProfile extends IGenericResponse {
  response?: IUserFoodProfile;
  responseAll?: IUserFoodProfile[];
}
