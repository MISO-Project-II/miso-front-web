import { FREE_CONTRACT } from "./../../constanst/data.constants";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";

export const MockUserData: IUserData = {
  username: "miguel",
  name: "miguel",
  lastName: "niño",
  idIdentificationType: "CC",
  identificationNumber: "46218219",
  birthdUbication: "CO-CUN-12312",
  homeUbication: "CO-CUN-12312-10",
  gender: "M",
  weight: 83,
  age: new Date("1991-11-16T00:00:00.000+00:00"),
  height: 1.84, // En metros
  isVegan: 1,
  isvegetarian: 0,
  userPlan: FREE_CONTRACT,
  imc: 100,
  idSportPlan: 1,
  idFoodPlan: 1,
};

// Response

export const MockResSuccessUserData: IResUserData = {
  message: "success",
  success: true,
  result: MockUserData,
};
export const MockResErrorUserData: IResUserData = {
  message: "Failed to execute",
  success: false,
};
