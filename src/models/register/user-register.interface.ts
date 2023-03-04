import { ICity, ICountry, IState } from "../general/countryStateCity.interface";
import { ISports } from "../general/sports.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IUserRegister {
  // Datos principales
  id?: string;
  username: string; // username
  password: string; // password
  name: string; // name
  lastName: string; //lastName
  identificationType: string; // identificationType
  identificationNumber: string; // identificationNumber
  // Datos deportivos
  // Datos secundarios
  gender: string; // gender
  age: string; // age // Fecha de nacimiento año-mes-dia yyyy-MM-dd
  weight: number; // FALTA EN POSTMAN
  height: number; //height
  // Datos de ubicacion
  birthdUbication: string; //"CO-CUN-12312-COP"

  homeUbication: string; //"CO-CUN-12312-COP-10"
  isVegan: number; //Se envia por defecto 0
  isvegetarian: number;
  userType: string;
}
export interface IResUserRegister extends IGenericResponse {
  result?: number;
}
