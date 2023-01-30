import {
  IResSportPlans,
  ISportPlans,
} from "src/models/home/sport-plans.interface";
import { MockGetAllTrainingRoutines } from "../routines/training-routines.mock";

// Data request
export const MockSportPlans: ISportPlans = {
  title: "Plan aumento muscular",
  description: "Este plan es para aumentar musculo",
  trainigRoutines: MockGetAllTrainingRoutines,
};
// Data Response
export const MockGetSportPlans: ISportPlans = {
  id: "1",
  title: "Plan aumento muscular",
  description: "Este plan es para aumentar musculo",
  trainigRoutines: MockGetAllTrainingRoutines,
};
export const MockGetAllSportPlans: ISportPlans[] = [
  {
    id: "1",
    title: "Plan aumento muscular",
    description: "Este plan es para aumentar musculo",
    trainigRoutines: MockGetAllTrainingRoutines,
  },
  {
    id: "2",
    title: "Plan adelgazamiento",
    description: "Este plan es de adelgazamiento",
    trainigRoutines: MockGetAllTrainingRoutines,
  },
  {
    id: "3",
    title: "Plan tonificacion",
    description: "Este plan es de tonificacion",
    trainigRoutines: MockGetAllTrainingRoutines,
  },
];

// Response
export const MockResSuccessGetSportPlans: IResSportPlans = {
  response: MockGetSportPlans,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllSportPlans: IResSportPlans = {
  responseAll: MockGetAllSportPlans,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessSportPlans: IResSportPlans = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorSportPlans: IResSportPlans = {
  success: false,
  errorMessage: "Error SportPlans",
  date: new Date(),
};
