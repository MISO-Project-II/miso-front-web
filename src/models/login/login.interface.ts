import { IGenericRequest, IGenericResponse } from "../local/generic.interface";

export interface ILogin {
  username: string;
  password: string;
  authCode?: string;
}
export interface IReqLogin extends IGenericRequest {
  request: ILogin;
}
export interface IResLogin extends IGenericResponse {
  response?: ILogin;
  user?: IUser;
  userId: number;
  token: string;
}

export interface IUser {
  lastName: string;
  name: string;
  numberIdentification: string;
  userName: string;
  userType: string;
}
export interface IUser {
  lastName: string;
  name: string;
  numberIdentification: string;
  userName: string;
  userType: string;
}
