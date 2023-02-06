import {
  IResAllergies,
  IAllergies,
} from "src/models/general/allergies.interface";

// Data request
export const MockAllergies: IAllergies = {
  title: "Mani",
  description: "Este alergia al mani",
};
// Data Response
export const MockGetAllergies: IAllergies = {
  id: "1",
  title: "Mani",
  description: "Este alergia al mani",
};
export const MockGetAllAllergies: IAllergies[] = [
  {
    id: "1",
    title: "Mani",
    description: "Este alergia al mani",
  },
  {
    id: "2",
    title: "Nueces",
    description: "Este alergia a las nueces",
  },
  {
    id: "3",
    title: "Polen",
    description: "Este alergia al polen",
  },
];

// Response
export const MockResSuccessGetAllergies: IResAllergies = {
  response: MockGetAllergies,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllAllergies: IResAllergies = {
  responseAll: MockGetAllAllergies,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessAllergies: IResAllergies = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorAllergies: IResAllergies = {
  success: false,
  errorMessage: "Error Allergies",
  date: new Date(),
};
