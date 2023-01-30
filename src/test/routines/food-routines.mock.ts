import {
  IResFoodRoutines,
  IFoodRoutines,
} from "src/models/routines/food-routines.interface";
import { MockGetAllFoods } from "../general/foods.mock";

// Data request
export const MockFoodRoutines: IFoodRoutines = {
  title: "Rutina alimenticia Bajar de peso",
  description: "Esta es una Rutina alimenticia Bajar de peso",
  foods: MockGetAllFoods,
};
// Data Response
export const MockGetFoodRoutines: IFoodRoutines = {
  id: "1",
  title: "Rutina alimenticia Bajar de peso",
  description: "Esta es una Rutina alimenticia Bajar de peso",
  foods: MockGetAllFoods,
};
export const MockGetAllFoodRoutines: IFoodRoutines[] = [
  {
    id: "1",
    title: "Rutina alimenticia Bajar de peso",
    description: "Esta es una Rutina alimenticia Bajar de peso",
    foods: MockGetAllFoods,
  },
  {
    id: "2",
    title: "Rutina alimenticia aumento de espalda",
    description: "Esta es una Rutina alimenticia de aumento de espalda",
    foods: MockGetAllFoods,
  },
  {
    id: "3",
    title: "Rutina alimenticia para despues de ejercicio",
    description: "Esta es una Rutina alimenticia para despues de ejercicio",
    foods: MockGetAllFoods,
  },
  {
    id: "4",
    title: "Rutina alimenticia para antes de ejercicio",
    description: "Esta es una Rutina alimenticia para antes de ejercicio",
    foods: MockGetAllFoods,
  },
];

// Response
export const MockResSuccessGetFoodRoutines: IResFoodRoutines = {
  response: MockGetFoodRoutines,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllFoodRoutines: IResFoodRoutines = {
  responseAll: MockGetAllFoodRoutines,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessFoodRoutines: IResFoodRoutines = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorFoodRoutines: IResFoodRoutines = {
  success: false,
  errorMessage: "Error FoodRoutines",
  date: new Date(),
};
