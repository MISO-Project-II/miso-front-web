import {
  IResIntolerances,
  IIntolerances,
} from "src/models/general/intolerances.interface";

// Data request
export const MockIntolerances: IIntolerances = {
  title: "Lactsa",
  description: "Esta es intolerancia a lactosa",
};
// Data Response
export const MockGetIntolerances: IIntolerances = {
  id: "1",
  title: "Lactsa",
  description: "Esta es intolerancia a lactosa",
};
export const MockGetAllIntolerances: IIntolerances[] = [
  {
    id: "1",
    title: "Lactsa",
    description: "Esta es intolerancia a lactosa",
  },
  {
    id: "2",
    title: "Cafe",
    description: "Esta es intolerancia a cafe",
  },
  {
    id: "3",
    title: "Grasas",
    description: "Esta es intolerancia a grasas",
  },
];

// Response
export const MockResSuccessGetIntolerances: IResIntolerances = {
  response: MockGetIntolerances,
  success: true,
  message: "message",
};
export const MockResSuccessGetAllIntolerances: IResIntolerances = {
  responseAll: MockGetAllIntolerances,
  success: true,
  message: "message",
};

export const MockResSuccessIntolerances: IResIntolerances = {
  success: true,
  message: "message",
};
export const MockResErrorIntolerances: IResIntolerances = {
  success: false,
  message: "Error Intolerances",
};
