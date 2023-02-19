import { ICity, ICountry, IState } from "../general/countryStateCity.interface";
import { ISports } from "../general/sports.interface";
import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface IUserRegister {
  // Datos principales
  id?: string;
  username: string; // username
  password: string; // password
  // confirmation: string; // NO
  name: string; // name
  lastName: string; //lastName
  identificationType: string; // identificationType
  identificationNumber: string; // identificationNumber
  // Datos deportivos
  // sportPractice: ISports[]; // [1,2,5]
  // sportInterest: ISports[]; // [4,5,6]
  // Datos secundarios
  gender: string; // gender
  age: string; // age // Fecha de nacimiento año-mes-dia yyyy-MM-dd
  weight: number; // FALTA EN POSTMAN
  height: number; //height
  // Datos de ubicacion
  // countryOfBirth: ICountry; // birthdUbication (Solo id de ubicacion)
  // stateOfBirth: IState; //
  birthdUbication: number; //
  // countryOfResidence: ICountry; // homeUbication (Solo el id de ubicacion) ver imagen de referencia
  // stateOfResidence: IState; //
  homeUbication: number; //
  // montsOfResidence: number; // Meses de residencia

  isVegan: number; //Se envia por defecto 0
  isvegetarian: number;
  userType: string;
}
export interface IResUserRegister extends IGenericResponse {
  result?: number;
}
