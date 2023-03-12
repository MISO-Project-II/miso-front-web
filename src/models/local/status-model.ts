export class StatusModel {
  // LoginService
  userType: string; // User Plan, SPORTSMAN, THIRD
  userUrl: string; // User url, "usuario/", "tercero/"
  userId: number;
  token: string;
  username: string;
  contractType: string; // Contract Plan, FREE_CONTRACT, INTERMEDIATE_CONTRACT, PREMIUM_CONTRACT = userPlan
  // UserDataService
  name: string;
  lastName: string;
  idIdentificationType: string; // CC, TI
  identificationNumber: string;
  birthdUbication: string; // "CO-CUN-12312" pais-estado-municipio
  homeUbication: string; // "CO-CUN-12312-10" pais-estado-municipio-mesesDeResidencia
  gender: string;
  age: Date;
  weight: number;
  height: number;
  imc: number;
  isVegan: number;
  isvegetarian: number;
  idSportPlan: number;
  idFoodPlan: number;
  description?: string;
  constructor(userType: string) {
    this.userType = userType;
  }
}
