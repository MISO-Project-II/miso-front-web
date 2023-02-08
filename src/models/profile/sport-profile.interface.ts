import { ISports } from "../general/sports.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IUserSportProfile {
  id?: string;
  sport_practice: ISports[];
  sport_interest: ISports[];
  practice_hours: string;
  disabilities: string; //Incapacidades
  pains: string; //molestias
  sports_history: string;
}
export interface IReqUserSportProfile extends IGenericRequest {
  request?: IUserSportProfile;
}
export interface IResUserSportProfile extends IGenericResponse {
  response?: IUserSportProfile;
  responseAll?: IUserSportProfile[];
}
