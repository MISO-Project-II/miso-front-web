import {
  IResDisabilities,
  IDisabilities,
} from "src/models/general/disabilities.interface";

// Data request
export const MockDisabilities: IDisabilities = {
  title: "Fractura de muñeca",
  description: "Esta es una incapacidad de fractura de muñeca",
};
// Data Response
export const MockGetDisabilities: IDisabilities = {
  id: "1",
  title: "Fractura de muñeca",
  description: "Esta es una incapacidad de fractura de muñeca",
};
export const MockGetAllDisabilities: IDisabilities[] = [
  {
    id: "1",
    title: "Fractura de muñeca",
    description: "Esta es una incapacidad de fractura de muñeca",
  },
  {
    id: "2",
    title: "Fractura de meñique",
    description: "Esta es una incapacidad de fractura de meñique",
  },
];

// Response
export const MockResSuccessGetDisabilities: IResDisabilities = {
  response: MockGetDisabilities,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllDisabilities: IResDisabilities = {
  responseAll: MockGetAllDisabilities,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessDisabilities: IResDisabilities = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorDisabilities: IResDisabilities = {
  success: false,
  errorMessage: "Error Disabilities",
  date: new Date(),
};
