import { IResPlan, IPlan } from "src/models/update-plan/update-plan.interface";

// Data request
export const MockPlan: IPlan = {
  plan: "FREE_PLAN",
};
// Data Response
export const MockGetPlan: IPlan = {
  id: "1",
  plan: "PREMIUM_PLAN",
};
export const MockGetAllPlan: IPlan[] = [
  {
    id: "1",
    plan: "FREE_PLAN",
  },
];

// Response
export const MockResSuccessGetPlan: IResPlan = {
  response: MockGetPlan,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessPlan: IResPlan = {
  response: MockGetPlan,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorPlan: IResPlan = {
  success: false,
  errorMessage: "Error Plan",
  date: new Date(),
};
