import {
  IResSuggestionSportPlan,
  ISuggestionSportPlan,
} from "src/models/suggestions/suggestion-sport-plan.interface";

// Data Response
export const MockGetSuggestionSportPlan: ISuggestionSportPlan = {
  id: "1",
  title: "Plan aumento muscular",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

// Response
export const MockResSuccessGetSuggestionSportPlan: IResSuggestionSportPlan = {
  response: MockGetSuggestionSportPlan,
  success: true,
  message: "message",
};
export const MockResErrorSuggestionSportPlan: IResSuggestionSportPlan = {
  success: false,
  message: "Error SuggestionSportPlan",
};
