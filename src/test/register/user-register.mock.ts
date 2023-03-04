import { Date_yyyymmdd } from "src/helper/date.helper";
import {
  IResUserRegister,
  IUserRegister,
} from "src/models/register/user-register.interface";

export const MockUserRegister: IUserRegister = {
  username: "miguel1",
  password: "miguel1",
  name: "miguel",
  lastName: "1",
  identificationType: "CC",
  identificationNumber: "10490987665",
  gender: "M",
  age: Date_yyyymmdd(new Date()),
  weight: 80,
  height: 170,
  birthdUbication: "CO-CUN-12312-COP",
  homeUbication: "CO-CUN-12312-COP-10",
  isVegan: 0,
  isvegetarian: 0,
  userType: "SPORTSMAN",
};

export const MockResSuccessUserRegister: IResUserRegister = {
  success: true,
  message: "",
  result: 5,
};
export const MockResErrorUserRegister: IResUserRegister = {
  success: false,
  message: "Error user register",
};
