import {
  IResSuggestionFoodPlan,
  ISuggestionFoodPlan,
} from "src/models/suggestions/suggestion-food-plan.interface";

// Data Response
export const MockGetSuggestionFoodPlan: ISuggestionFoodPlan = {
  id: "1",
  title: "Recuperacion",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

// Response
export const MockResSuccessGetSuggestionFoodPlan: IResSuggestionFoodPlan = {
  response: MockGetSuggestionFoodPlan,
  success: true,
  message: "message",
};
export const MockResErrorSuggestionFoodPlan: IResSuggestionFoodPlan = {
  success: false,
  message: "Error SuggestionFoodPlan",
};
