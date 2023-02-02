import { ICity, ICountry, IState } from "../general/countryStateCity.interface";
import { ISports } from "../general/sports.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IUserRegister {
  // Datos principales
  id?: string;
  user: string; // username
  pass: string; // password
  confirmation: string; // NO
  name: string; // name
  lastName: string; //lastName
  IdType: string; // identificationType
  IdNumber: number; // identificationNumber
  // Datos deportivos
  sportPractice: ISports[]; // [1,2,5] 
  sportInterest: ISports[];// [4,5,6] 
  // Datos secundarios
  genre: string; // gender
  age: number; // age // Fecha de nacimiento
  weight: number; // FALTA EN POSTMAN
  height: number; //height
  // Datos de ubicacion
  countryOfBirth: ICountry; // birthdUbication (Solo id de ubicacion)
  stateOfBirth: IState; // 
  cityOfBirth: ICity; // 
  countryOfResidence: ICountry; // homeUbication (Solo el id de ubicacion) ver imagen de referencia
  stateOfResidence: IState; //
  cityOfResidence: ICity; // 
  yearsOfResidence: number; // Meses de residencia 
  
  // "isVegan": 0, Se envia por defecto 0
  // "isvegetarian": 0,
  // userType : "deportista"
}
export interface IReqUserRegister extends IGenericRequest {
  request?: IUserRegister;
}
export interface IResUserRegister extends IGenericResponse {
  response?: IUserRegister;
  responseAll?: IUserRegister[];
}
