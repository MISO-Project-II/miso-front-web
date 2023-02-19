import { IResPlan, IPlan } from "src/models/update-plan/update-plan.interface";

// Data request
export const MockPlan: IPlan = {
  plan: "FREE_CONTRACT",
};
// Data Response
export const MockGetPlan: IPlan = {
  id: "1",
  plan: "PREMIUM_CONTRACT",
};
export const MockGetAllPlan: IPlan[] = [
  {
    id: "1",
    plan: "FREE_CONTRACT",
  },
];

// Response
export const MockResSuccessGetPlan: IResPlan = {
  response: MockGetPlan,
  success: true,
  message: "message",
};

export const MockResSuccessPlan: IResPlan = {
  response: MockGetPlan,
  success: true,
  message: "message",
};
export const MockResErrorPlan: IResPlan = {
  success: false,
  message: "Error Plan",
};
