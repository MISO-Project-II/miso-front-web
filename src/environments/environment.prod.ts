export const environment = {
  production: true,
  version: "1.25.3",
  api: {
    base: "https://cem2a935b5.execute-api.us-east-1.amazonaws.com/api/v1",
    general_data: "/users/general_data",
    demographic_profile: "/demographic_profile",
    sport_profile: "/sport_profile",
    food_profile: "/food_profile",

    events: "/event",
    user_event: "/users/{{id}}/event",
    user_event_consume: "/consume",
    user_event_created: "/created",
    services: "/service",
    user_service: "/users/{{id}}/service",
    user_service_consume: "/consume",
    user_service_created: "/created",
    products: "/product",
    user_product: "/users/{{id}}/product",
    user_product_consume: "/consume",
    user_product_created: "/created",
    routes: "/routes",

    update_plan: "/update_plan",

    login: "/users/login",
    user_register: "/users/user_register",
    third_register: "/third_register",

    suggestions_food_plans: "/suggestions/food_plans",
    suggestions_routes: "/suggestions/routes",
    suggestions_events: "/suggestions/events",
    suggestions_sport_plan: "/suggestions/sport_plan",
    suggestions_services: "/suggestions/services",

    sports: "/sports",
    allergies: "/allergies",
    disabilities: "/disabilities", //Incapacidades
    pains: "/pains", //Molestias
    intolerances: "/intolerances", // Intolerancias

    user_data: "/user_data",
    third_data: "/third_data",

    sport_plans: "/sport_plans",
    sport_routines: "/sport_routines",
    exercises: "/exercises",
    food_plans: "/food_plans",
    food_routines: "/food_routines",
    foods: "/foods",
    session: "/session",
    headers: {
      "X-API-KEY": "EqYv56oSln9rs1Kirj8Fc7hzy6wWE6tY3NwtbE1M",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    headers2: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
  key_country_state_city:
    "TFFReldaT3UwQjV2cEhJWkFSOHFEMTNJVVA2Y0JGMEVraDlqMDR0SA==",
};
