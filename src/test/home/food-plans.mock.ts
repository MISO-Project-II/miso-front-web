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
// export const MockResSuccessGetFoodPlans: IResFoodPlans = {
//   result: MockGetAllFoodPlans,
//   success: true,
//   message: "message",
// };
export const MockResSuccessGetAllFoodPlans: IResFoodPlans = {
  result: MockGetAllFoodPlans,
  success: true,
  message: "message",
};

export const MockResSuccessFoodPlans: IResFoodPlans = {
  result: null,
  success: true,
  message: "message",
};
export const MockResErrorFoodPlans: IResFoodPlans = {
  result: null,
  success: false,
  message: "Error FoodPlans",
};
