import {
  IResExercises,
  IExercises,
} from "src/models/general/exercises.interface";

// Data request
export const MockExercises: IExercises = {
  title: "Bicicleta estática",
  description: "Este ejercicio es bicicleta estatica",
  calories: "500",
  timeMinutes: "35",
};
// Data Response
export const MockGetExercises: IExercises = {
  id: "1",
  title: "Bicicleta estática",
  description: "Este ejercicio es bicicleta estatica",
  calories: "500",
  timeMinutes: "35",
};
export const MockGetAllExercises: IExercises[] = [
  {
    id: "1",
    title: "Bicicleta estática",
    description: "Este ejercicio es bicicleta estatica",
    calories: "500",
    timeMinutes: "35",
  },
  {
    id: "2",
    title: "Salto de cuerda",
    description: "Este ejercicio es Salto de cuerda",
    calories: "30",
    timeMinutes: "15",
  },
  {
    id: "3",
    title: "Calistenia",
    description: "Este ejercicio es calistenia",
    calories: "400",
    timeMinutes: "20",
  },
];

// Response
export const MockResSuccessGetExercises: IResExercises = {
  response: MockGetExercises,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllExercises: IResExercises = {
  responseAll: MockGetAllExercises,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessExercises: IResExercises = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorExercises: IResExercises = {
  success: false,
  errorMessage: "Error Exercises",
  date: new Date(),
};
