import { IGenericResponse } from "../local/generic.interface";

export interface FoodFrecuency {
  idFoodFrecuency: number;
  minute: number;
  hour: number;
  dayLetter: string;
}

export interface FoodType {
  idFoodType: number;
  name: string;
  isVegan: number;
  isVegetarian: number;
}

export interface Food {
  idFood: number;
  nameFood: string;
  calories: number;
  description: string;
  idUbication: string;
  foodType: FoodType;
}

export interface IResFood extends IGenericResponse {
  result?: Food[];
}

export interface FoodRoutineList {
  idFoodRoutine: number;
  foodFrecuency: FoodFrecuency;
  food: Food[];
  name: string;
  description: string;
}

export interface IFoodPlans {
  idFoodPlan: number;
  name: string;
  description: string;
  foodRoutineList: FoodRoutineList[];
  calories?: number;
  contractType: string;
  eventType: string;
}
