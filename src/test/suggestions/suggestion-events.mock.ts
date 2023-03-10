import {
  IResSuggestionEvents,
  ISuggestionEvents,
} from "src/models/suggestions/suggestion-events.interface";

// Data Response
export const MockGetSuggestionEvents: ISuggestionEvents = {
  id: "1",
  title: "Ejercicio al aire libre",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  startPlace: "Plaza central",
  destinyPlace: "Parque norte",

  eventCategoryId: "OUTSIDE_OF_HOUSE",
  thirdId: "1",
};

// Response
export const MockResSuccessGetSuggestionEvents: IResSuggestionEvents = {
  response: MockGetSuggestionEvents,
  success: true,
  message: "message",
};
export const MockResErrorSuggestionEvents: IResSuggestionEvents = {
  success: false,
  message: "Error SuggestionEvents",
};
