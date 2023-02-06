import {
  IResFoodPlans,
  IFoodPlans,
} from "src/models/home/food-plans.interface";
import { MockGetAllFoodRoutines } from "../routines/food-routines.mock";

// Data request
export const MockFoodPlans: IFoodPlans = {
  title: "Recuperacion",
  description: "Este plan es recuperacion",
  foodRoutines: MockGetAllFoodRoutines,
};
// Data Response
export const MockGetFoodPlans: IFoodPlans = {
  id: "1",
  title: "Recuperacion",
  description: "Este plan es recuperacion",
  foodRoutines: MockGetAllFoodRoutines,
};
export const MockGetAllFoodPlans: IFoodPlans[] = [
  {
    id: "1",
    title: "Recuperacion",
    description: "Este plan es recuperacion",
    foodRoutines: MockGetAllFoodRoutines,
  },
  {
    id: "2",
    title: "Bajar de peso",
    description: "Este plan es bajar de peso",
    foodRoutines: MockGetAllFoodRoutines,
  },
  {
    id: "3",
    title: "Aumentar masa muscular",
    description: "Este plan es aumentar masa muscular",
    foodRoutines: MockGetAllFoodRoutines,
  },
];

// Response
export const MockResSuccessGetFoodPlans: IResFoodPlans = {
  response: MockGetFoodPlans,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllFoodPlans: IResFoodPlans = {
  responseAll: MockGetAllFoodPlans,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessFoodPlans: IResFoodPlans = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorFoodPlans: IResFoodPlans = {
  success: false,
  errorMessage: "Error FoodPlans",
  date: new Date(),
};
