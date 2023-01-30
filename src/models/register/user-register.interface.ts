import { ICity, ICountry, IState } from "../general/countryStateCity.interface";
import { ISports } from "../general/sports.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IUserRegister {
  // Datos principales
  id?: string;
  user: string;
  pass: string;
  confirmation: string;
  name: string;
  lastName: string;
  IdType: string;
  IdNumber: number;
  // Datos deportivos
  sportPractice: ISports[];
  sportInterest: ISports[];
  // Datos secundarios
  genre: string;
  age: number;
  weight: number;
  height: number;
  // Datos de ubicacion
  countryOfBirth: ICountry;
  stateOfBirth: IState;
  cityOfBirth: ICity;
  countryOfResidence: ICountry;
  stateOfResidence: IState;
  cityOfResidence: ICity;
  yearsOfResidence: number;
}
export interface IReqUserRegister extends IGenericRequest {
  request?: IUserRegister;
}
export interface IResUserRegister extends IGenericResponse {
  response?: IUserRegister;
  responseAll?: IUserRegister[];
}
