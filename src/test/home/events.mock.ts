import { IResEvents, IEvents } from "src/models/home/events.interface";

// Data request
export const MockEvents: IEvents = {
  title: "Media maraton",
  description: "Este evento es media maraton",
  startPlace: "Plaza central",
  destinyPlace: "Parque norte",
  date: new Date(),
  eventCategoryId: "INSIDE_OF_HOUSE",
  thirdId: "1",
};
// Data Response
export const MockGetEvents: IEvents = {
  id: "1",
  title: "Media maraton",
  description: "Este evento es media maraton",
  startPlace: "Plaza central",
  destinyPlace: "Parque norte",
  date: new Date(),
  eventCategoryId: "INSIDE_OF_HOUSE",
  thirdId: "1",
};
export const MockGetAllEvents: IEvents[] = [
  {
    id: "1",
    title: "Media maraton",
    description: "Este evento es media maraton",
    startPlace: "Plaza central",
    destinyPlace: "Parque norte",
    date: new Date(),
    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "1",
  },
  {
    id: "2",
    title: "Rodada ciclista",
    description: "Este evento es rodada ciclista",
    startPlace: "Parque oriental",
    destinyPlace: "Parque sur",
    date: new Date(),
    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "2",
  },
  {
    id: "3",
    title: "Gimnasia al sofa",
    description: "Este evento es gimnasia al sofa",
    startPlace: "En casa",
    date: new Date(),
    eventCategoryId: "INSIDE_OF_HOUSE",
    thirdId: "3",
  },
];

// Response
export const MockResSuccessGetEvents: IResEvents = {
  response: MockGetEvents,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllEvents: IResEvents = {
  responseAll: MockGetAllEvents,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessEvents: IResEvents = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorEvents: IResEvents = {
  success: false,
  errorMessage: "Error Events",
  date: new Date(),
};
