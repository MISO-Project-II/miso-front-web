export const ROUTES_NAMES = {
  HOME: "inicio",
  SESSION: "sesion",
  EVENTS: "eventos",
  SERVICES: "servicios",
  PLANS: "planes",
  PROFILE: "perfil",
};
export const USER_ROUTES = [
  {
    path: "",
    loadChildren: () =>
      import("../app/pages/user/user-home/user-home.module").then(
        (m) => m.UserHomeModule
      ),
  },
  {
    path: ROUTES_NAMES.HOME,
    loadChildren: () =>
      import("../app/pages/user/user-home/user-home.module").then(
        (m) => m.UserHomeModule
      ),
  },
  {
    path: ROUTES_NAMES.SESSION,
    loadChildren: () =>
      import("../app/pages/user/user-session/user-session.module").then(
        (m) => m.UserSessionModule
      ),
  },
  {
    path: ROUTES_NAMES.EVENTS,
    loadChildren: () =>
      import("../app/pages/user/user-events/user-events.module").then(
        (m) => m.UserEventsModule
      ),
  },
  {
    path: ROUTES_NAMES.SERVICES,
    loadChildren: () =>
      import("../app/pages/user/user-services/user-services.module").then(
        (m) => m.UserServicesModule
      ),
  },
  {
    path: ROUTES_NAMES.PLANS,
    loadChildren: () =>
      import("../app/pages/user/user-plans/user-plans.module").then(
        (m) => m.UserPlansModule
      ),
  },
  {
    path: ROUTES_NAMES.PROFILE,
    loadChildren: () =>
      import("../app/pages/user/user-profile/user-profile.module").then(
        (m) => m.UserProfileModule
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
export const THIRD_ROUTES = [
  {
    path: "",
    loadChildren: () =>
      import("../app/pages/third/third-home/third-home.module").then(
        (m) => m.ThirdHomeModule
      ),
  },
  {
    path: ROUTES_NAMES.HOME,
    loadChildren: () =>
      import("../app/pages/third/third-home/third-home.module").then(
        (m) => m.ThirdHomeModule
      ),
  },
  {
    path: ROUTES_NAMES.EVENTS,
    loadChildren: () =>
      import("../app/pages/third/third-events/third-events.module").then(
        (m) => m.ThirdEventsModule
      ),
  },
  {
    path: ROUTES_NAMES.SERVICES,
    loadChildren: () =>
      import("../app/pages/third/third-services/third-services.module").then(
        (m) => m.ThirdServicesModule
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
