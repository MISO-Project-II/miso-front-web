import {
  IResSuggestionRoutes,
  ISuggestionRoutes,
} from "src/models/suggestions/suggestion-routes.interface";

// Data Response
export const MockGetSuggestionRoutes: ISuggestionRoutes = {
  id: "1",
  title: "Ruta ecologica",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

// Response
export const MockResSuccessGetSuggestionRoutes: IResSuggestionRoutes = {
  response: MockGetSuggestionRoutes,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorSuggestionRoutes: IResSuggestionRoutes = {
  success: false,
  errorMessage: "Error SuggestionRoutes",
  date: new Date(),
};
