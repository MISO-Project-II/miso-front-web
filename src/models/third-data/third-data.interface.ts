import { IGenericResponse } from "../local/generic.interface";

export interface IThirdDataMap {
  idUser: number;
  username: string;
  name: string;
  lastName: string;
  idIdentificationType: string;
  identificationNumber: string;
  homeUbication: string;
  description?: string;
  userType: string;
  isThrid: boolean;
}
export interface IResThirdData extends IGenericResponse {
  result?: IThirdData[];
}

export interface IdIdentificationType {
  name: string;
}

export interface IdUserType {
  idUserType: number;
  nameType: string;
}

export interface ListImpediment {
  id: number;
  idImpediment: number;
}

export interface IThirdData {
  idUser: number;
  name: string;
  lastName: string;
  idIdentificationType: IdIdentificationType;
  identificationNumber: string;
  gender: string;
  age: string;
  height: number;
  weight: number;
  birthdUbication: string;
  homeUbication: string;
  username: string;
  password: string;
  isVegan: number;
  userPlan: string;
  idSportPlan: number;
  idFoodPlan: number;
  description: string;
  isvegetarian: number;
  idUserType: IdUserType;
  imc: number;
  isThrid: boolean;
  listService: any[];
  listSport: any[];
  listEvent: any[];
  listImpediment: ListImpediment[];
  listProduct: any[];
}
