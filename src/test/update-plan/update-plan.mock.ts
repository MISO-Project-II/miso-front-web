import { IResPlan, IPlan } from "src/models/update-plan/update-plan.interface";

// Data request
export const MockPlan: IPlan = {
  idUser: 1,
  idPlan: "FREE_CONTRACT",
  transaction: "123-sad-zxc",
};
// Data Response
export const MockGetPlan: IPlan = {
  idUser: 3,
  // idPlan: "FREE_CONTRACT",
  // idPlan: "INTERMEDIATE_CONTRACT",
  idPlan: "PREMIUM_CONTRACT",
  transaction: "123-sad-zxc",
};
export const MockGetAllPlan: IPlan[] = [
  {
    idUser: 1,
    idPlan: "INTERMEDIATE_CONTRACT",
    transaction: "123-sad-zxc",
  },
];

// Response
export const MockResSuccessGetPlan: IResPlan = {
  result: MockGetPlan,
  success: true,
  message: "message",
};

export const MockResSuccessPlan: IResPlan = {
  result: MockGetPlan,
  success: true,
  message: "message",
};
export const MockResErrorPlan: IResPlan = {
  success: false,
  message: "Error Plan",
  result: null,
};
