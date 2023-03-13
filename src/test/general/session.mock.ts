import { ISetSession } from "src/models/general/session.interface";

// Data request
export const MockGetSession: ISetSession = {
  startSession: "2023-03-11T10:44:21.634Z",
  endSession: "2023-03-11T10:44:21.634Z",
  calories: 1000,
  id: 1,
  values: [
    {
      id: 53,
      value: 53,
      label: "Vo2 máx",
      append: "ml/min/kg",
      min: 0,
      max: 100,
    },
    { id: 53, value: 31, label: "Velocidad", append: "Km/h", min: 0, max: 50 },
    { id: 53, value: 39, label: "Temperatura", append: "ºC", min: 0, max: 45 },
  ],
};
