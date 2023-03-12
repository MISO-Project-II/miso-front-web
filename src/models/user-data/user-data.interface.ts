import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IUserData {
  username: string;
  name: string;
  lastName: string;
  idIdentificationType: string;
  identificationNumber: string;
  birthdUbication: string;
  homeUbication: string;
  gender: string;
  weight: number;
  age: Date;
  height: number;
  userPlan: string;
  imc?: number;
  idSportPlan?: number;
  idFoodPlan?: number;
  isVegan?: number;
  isvegetarian?: number;
  description?: string;
}

export interface IResUserData extends IGenericResponse {
  message: string;
  success: boolean;
  result?: IUserData;
}
