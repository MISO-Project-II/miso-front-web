import { Routes } from "@angular/router";
export const ROOT_ROUTES_NAMES = {
  SPORTAPP: "sportapp/",
  USER_LOGIN: "login-usuario",
  USER_REGISTER: "registro-usuario",
  THIRD_LOGIN: "login-tercero",
  THIRD_REGISTER: "registro-tercero",
  USER: "usuario",
  THIRD: "tercero",
  ERROR: "error",
  HELPER: "helper",
};
export const ROOT_ROUTES: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../app/pages/user-login/user-login.module").then(
        (m) => m.UserLoginModule
      ),
  },
  {
    path: ROOT_ROUTES_NAMES.USER_LOGIN,
    loadChildren: () =>
      import("../app/pages/user-login/user-login.module").then(
        (m) => m.UserLoginModule
      ),
  },
  {
    path: ROOT_ROUTES_NAMES.USER_REGISTER,
    loadChildren: () =>
      import("../app/pages/user-register/user-register.module").then(
        (m) => m.UserRegisterModule
      ),
  },
  {
    path: ROOT_ROUTES_NAMES.THIRD_LOGIN,
    loadChildren: () =>
      import("../app/pages/third-login/third-login.module").then(
        (m) => m.ThirdLoginModule
      ),
  },
  {
    path: ROOT_ROUTES_NAMES.ERROR,
    loadChildren: () =>
      import("../app/pages/error/error.module").then((m) => m.ErrorModule),
  },
  {
    path: ROOT_ROUTES_NAMES.USER,
    loadChildren: () =>
      import("./pages/user-dashboard/user-dashboard.module").then(
        (m) => m.UserDashboardModule
      ),
  },
  {
    path: ROOT_ROUTES_NAMES.THIRD,
    loadChildren: () =>
      import("./pages/third-dashboard/third-dashboard.module").then(
        (m) => m.ThirdDashboardModule
      ),
  },
  {
    path: ROOT_ROUTES_NAMES.HELPER,
    loadChildren: () =>
      import("../app/pages/helper/helper.module").then((m) => m.HelperModule),
  },
  {
    path: "**",
    redirectTo: ROOT_ROUTES_NAMES.USER_LOGIN,
  },
];
