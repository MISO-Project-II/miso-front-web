import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ILogin {
  username: string;
  password: string;
}
export interface IReqLogin extends IGenericRequest {
  request: ILogin;
}
export interface IResLogin extends IGenericResponse {
  success: boolean;
  message: string;
  date: Date | null;
  userId: number | null;
  token: string | null;
  user: IUser | null;
}
export interface IUser {
  name: string;
  lastName: string;
  username: string;
  numberIdentification: string;
  userType: string;
}
