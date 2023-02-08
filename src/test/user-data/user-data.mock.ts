import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";

export const MockUserData: IUserData = {
  username: "rob",
  name: "rob",
  lastName: "Rodriguez",
  idIdentificationType: "Pasaporte",
  identificationNumber: "46218219",
  gender: "Hombre",
  weight: 83,
  age: new Date("1991-11-16T00:00:00.000+00:00"),
  height: 184,
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
