import { IResPains, IPains } from "src/models/general/pains.interface";

// Data request
export const MockPains: IPains = {
  title: "Dolor en el tobillo",
  description: "Esta es una molestia de dolor en el tobillo",
};
// Data Response
export const MockGetPains: IPains = {
  id: "1",
  title: "Dolor en el tobillo",
  description: "Esta es una molestia de dolor en el tobillo",
};
export const MockGetAllPains: IPains[] = [
  {
    id: "1",
    title: "Dolor en el tobillo",
    description: "Esta es una molestia de dolor en el tobillo",
  },
  {
    id: "2",
    title: "Molestia en la muñeca",
    description: "Esta es una molestia en la muñeca",
  },
  {
    id: "3",
    title: "Molestia en el cuello",
    description: "Esta es una molestia en el cuello",
  },
];

// Response
export const MockResSuccessGetPains: IResPains = {
  response: MockGetPains,
  success: true,
  message: "message",
};
export const MockResSuccessGetAllPains: IResPains = {
  responseAll: MockGetAllPains,
  success: true,
  message: "message",
};

export const MockResSuccessPains: IResPains = {
  success: true,
  message: "message",
};
export const MockResErrorPains: IResPains = {
  success: false,
  message: "Error Pains",
};
