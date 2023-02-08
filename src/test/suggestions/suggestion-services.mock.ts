import {
  IResSuggestionServices,
  ISuggestionServices,
} from "src/models/suggestions/suggestion-services.interface";

// Data Response
export const MockGetSuggestionServices: ISuggestionServices = {
  id: "1",
  title: "Transporte de bicicletas o elementos deportivos",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  objectives: [
    {
      name: "Transporte",
    },
    {
      name: "Alimentacion",
    },
  ],
  manager: "Miguel Niño",
  contact: "3111234567",
  thirdId: "1",
};

// Response
export const MockResSuccessGetSuggestionServices: IResSuggestionServices = {
  response: MockGetSuggestionServices,
  success: true,
  message: "message",
};
export const MockResErrorSuggestionServices: IResSuggestionServices = {
  success: false,
  message: "Error SuggestionServices",
};
