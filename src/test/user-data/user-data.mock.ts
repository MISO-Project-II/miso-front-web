import { MockGetAllServices } from "./../home/services.mock";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { MockGetFoodPlans } from "../home/food-plans.mock";
import { MockGetAllProducts } from "../home/products.mock";
import { MockGetSportPlans } from "../home/sport-plans.mock";
import { MockGetAllTrainingRoutines } from "../routines/training-routines.mock";
import { MockGetAllEvents } from "../home/events.mock";

export const MockUserData: IUserData = {
  user: "miguimono",
  name: "Miguel Angel",
  lastName: "Nino Suarez",
  IdType: "CC",
  IdNumber: 1049123456,
  genre: "M",
  age: 30,
  weight: 80,
  height: 165,
};
// Data Response
export const MockGetUserData: IUserData = {
  id: "1",
  user: "miguimono",
  name: "Miguel Angel",
  lastName: "Nino Suarez",
  IdType: "CC",
  IdNumber: 1049123456,
  genre: "M",
  age: 30,
  weight: 80,
  height: 165,
  plan: "FREE_PLAN",
  events: MockGetAllEvents,
  sportPlan: MockGetSportPlans,
  foodPlan: MockGetFoodPlans,
  products: MockGetAllProducts,
  services: MockGetAllServices,
};
export const MockGetAllUserData: IUserData[] = [
  {
    id: "1",
    user: "miguimono",
    name: "Miguel Angel",
    lastName: "Nino Suarez",
    IdType: "CC",
    IdNumber: 1049123456,
    genre: "M",
    age: 30,
    weight: 80,
    height: 165,
  },
];

// Response
export const MockResSuccessGetUserData: IResUserData = {
  response: MockGetUserData,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessUserData: IResUserData = {
  response: MockGetUserData,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorUserData: IResUserData = {
  success: false,
  errorMessage: "Error UserData",
  date: new Date(),
};
