import { IResFoods, IFoods } from "src/models/general/foods.interface";

// Data request
export const MockFoods: IFoods = {
  title: "Cereal",
  description: "Esta comida es cereal",
  calories: "500",
  category: "SUGAR",
  city: {
    id: 12345,
    name: "Tunja",
  },
};
// Data Response
export const MockGetFoods: IFoods = {
  id: "1",
  title: "Cereal",
  description: "Esta comida es cereal",
  calories: "500",
  category: "SUGAR",
  city: {
    id: 12345,
    name: "Tunja",
  },
};
export const MockGetAllFoods: IFoods[] = [
  {
    id: "1",
    title: "Cereal",
    description: "Esta comida es cereal",
    calories: "500",
    category: "SUGAR",
    city: {
      id: 12345,
      name: "Tunja",
    },
  },
  {
    id: "2",
    title: "Banano",
    description: "Esta comida es banano",
    calories: "100",
    category: "SUGAR",
    city: {
      id: 12345,
      name: "Tunja",
    },
  },
  {
    id: "3",
    title: "Manzanas",
    description: "Esta comida es manzanas",
    calories: "200",
    category: "SUGAR",
    city: {
      id: 12345,
      name: "Tunja",
    },
  },
];

// Response
export const MockResSuccessGetFoods: IResFoods = {
  response: MockGetFoods,
  success: true,
  message: "message",
};
export const MockResSuccessGetAllFoods: IResFoods = {
  responseAll: MockGetAllFoods,
  success: true,
  message: "message",
};

export const MockResSuccessFoods: IResFoods = {
  success: true,
  message: "message",
};
export const MockResErrorFoods: IResFoods = {
  success: false,
  message: "Error Foods",
};
