import { ILogin, IResLogin } from "src/models/login/login.interface";

export const MockLogin: ILogin = {
  username: "rob",
  password: "rob",
};

export const MockResSuccessLogin: IResLogin = {
  success: true,
  message: "Success login",
  date: new Date("2023-02-05T23:41:52.164+00:00"),
  userId: 1,
  token:
    "eyJraWQiOiIvcHJpdmF0ZWtleS5wZW0iLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3VuaWFuZGVzLmVkdS5jby8iLCJzdWIiOiJyb2IiLCJpYXQiOjE2NzU2NDA1MTIsImV4cCI6MTY3NTY0NDExMiwiZ3JvdXBzIjpbImRlcG9ydGlzdGEiXSwianRpIjoiMDcxZThhZjItMTRiMC00ODBmLWI3MzAtMTIwMDk1NjcwN2NlIn0.MF5WNnKONLpSeGiDkVqTri_EAkG2pk6qEv01ALDmQ2rQK0-pXXVzqOkERtWQaqP4diji-OYYseoeV1oCzsTMG8PG_8gvq_d-SsbMlAJpV2DZg3_Snt9nYM7u3_U9Pu2jgVBS6L32uhdXVCPNwimQhLrhnegpTV2yXBXaOH-POfQKXK3g8bya-PBg2rJeZ0sSiXlxRweu9lnJ-wr55kC3pFdApS9MBwtDaBny6c5dJbx0M_wPZ9mIXy-cIKTAigOt3Xr3W8Rej3csD5gO0cvBGEk7QSO1jpdB65luStmsGS1DLEDV8fDN03tC8olvUAJhmUS9T5r7aEW0AFrt8voZDA",
  user: {
    name: "rob",
    lastName: "Rodriguez",
    username: "rob",
    numberIdentification: "46218219",
    userType: "deportista",
  },
};
export const MockResErrorLogin: IResLogin = {
  success: false,
  message: "Error login",
  date: null,
  userId: null,
  token: null,
  user: null,
};
