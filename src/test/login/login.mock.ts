import { ILogin, IResLogin } from "src/models/login/login.interface";

export const MockLogin: ILogin = {
  username: "Miguel",
  password: "5ef68465886fa04d3e0bbe86b59d964dd98e5775e95717df978d8bedee6ff16c",
  authCode: "123qweasdzxc",
};

export const MockResSuccessLogin: IResLogin = {
  success: true,
  userId: 224,
  user: {
    lastName: "Zevallos",
    name: "Jorge",
    numberIdentification: "10203040",
    userName: "Miguel",
    userType: "USER",
  },
  token:
    "eyJraWQiOiIvcHJpdmF0ZWtleS5wZW0iLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3VuaWFuZGVzLmVkdS5jby8iLCJzdWIiOiJNaWd1ZWwiLCJpYXQiOjE2Njk2Mzg3MjgsImV4cCI6MTY2OTY0MjMyOCwiZ3JvdXBzIjpbIlVTRVIiXSwianRpIjoiNzY5ZjA0MTMtZmIxMi00OGVhLTkzN2MtNzMzNjA0ZDY3MDdiIn0.WmCw7a3QbbJi4spoJn3n6LUXONLTXnlG_tNz0EPVzlj5Ob-Zn6MSwgBrv1lKeO1UbCJvzdVjxPNKlQNdbYRNzxRNdwSTIrnaXWmvAk9Ly8roD-BTIMspjFr-Gg2RM_liBu-KiMCSTpMxgehc6ftg8YDVNcsRCLov1mwcRtVNIiQDd1eWNi-_UpOniaqYEc9e-URcKAWjyfCG0VvEPNNrLW2tbuiXtXMu0f1Dp4AfSrdh44h0v5OcBeGUXvBD3jhTmzsvpMiKqaXsnWXQluAoBeG7mBibWZ-UsdaEpWujg5clTg1SUUXA_E8brzgsk3zqqEW3YjIPbGZoyiU3-qBiaw",
  errorMessage: "Success login",
  date: new Date(),
};
export const MockResErrorLogin: IResLogin = {
  success: false,
  userId: -1,
  token: "",
  errorMessage: "Error Login",
  date: new Date(),
};
