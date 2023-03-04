import {
  IResSportPlans,
  ISportPlans,
} from "src/models/home/sport-plans.interface";
import { MockGetAllSportRoutines } from "../routines/sport-routines.mock";

// Data request
export const MockSportPlans: ISportPlans = {
  title: "Plan aumento muscular",
  description: "Este plan es para aumentar musculo",
  trainigRoutines: MockGetAllSportRoutines,
};
// Data Response
export const MockGetSportPlans: ISportPlans = {
  id: "1",
  title: "Plan aumento muscular",
  description: "Este plan es para aumentar musculo",
  trainigRoutines: MockGetAllSportRoutines,
};
export const MockGetAllSportPlans: ISportPlans[] = [
  {
    id: "1",
    title: "Plan aumento muscular",
    description: "Este plan es para aumentar musculo",
    trainigRoutines: MockGetAllSportRoutines,
  },
  {
    id: "2",
    title: "Plan adelgazamiento",
    description: "Este plan es de adelgazamiento",
    trainigRoutines: MockGetAllSportRoutines,
  },
  {
    id: "3",
    title: "Plan tonificacion",
    description: "Este plan es de tonificacion",
    trainigRoutines: MockGetAllSportRoutines,
  },
];

// Response
// export const MockResSuccessGetSportPlans: IResSportPlans = {
//   result: MockGetSportPlans,
//   success: true,
//   message: "message",
// };
export const MockResSuccessGetAllSportPlans: IResSportPlans = {
  result: MockGetAllSportPlans,
  success: true,
  message: "message",
};

export const MockResSuccessSportPlans: IResSportPlans = {
  result: null,
  success: true,
  message: "message",
};
export const MockResErrorSportPlans: IResSportPlans = {
  result: null,
  success: false,
  message: "Error SportPlans",
};
