import {
  IResUserRegister,
  IUserRegister,
} from "src/models/register/user-register.interface";

export const MockUserRegister: IUserRegister = {
  username: "luisl",
  password: "luisl",
  name: "Luis",
  lastName: "Leon",
  identificationType: "TI",
  identificationNumber: "10490987665",
  gender: "F",
  age: "1991-11-16",
  weight: 80,
  height: 170,
  birthdUbication: 149237,
  homeUbication: 149237,
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
