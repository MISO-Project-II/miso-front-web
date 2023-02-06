import {
  IResSuggestionTrainingPlan,
  ISuggestionTrainingPlan,
} from "src/models/suggestions/suggestion-training-plan.interface";

// Data Response
export const MockGetSuggestionTrainingPlan: ISuggestionTrainingPlan = {
  id: "1",
  title: "Plan aumento muscular",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

// Response
export const MockResSuccessGetSuggestionTrainingPlan: IResSuggestionTrainingPlan =
  {
    response: MockGetSuggestionTrainingPlan,
    success: true,
    errorMessage: "",
    date: new Date(),
  };
export const MockResErrorSuggestionTrainingPlan: IResSuggestionTrainingPlan = {
  success: false,
  errorMessage: "Error SuggestionTrainingPlan",
  date: new Date(),
};
