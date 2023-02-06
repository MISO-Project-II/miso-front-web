import { IResEvents, IEvents } from "src/models/home/events.interface";

// Data request
export const MockEvents: IEvents = {
  title: "Media maraton",
  description: "Este evento es media maraton",
  startPlace: "Plaza central",
  destinyPlace: "Parque norte",

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

    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "1",
  },
  {
    id: "2",
    title: "Rodada ciclista",
    description: "Este evento es rodada ciclista",
    startPlace: "Parque oriental",
    destinyPlace: "Parque sur",

    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "2",
  },
  {
    id: "3",
    title: "Gimnasia al sofa",
    description: "Este evento es gimnasia al sofa",
    startPlace: "En casa",

    eventCategoryId: "INSIDE_OF_HOUSE",
    thirdId: "3",
  },
];

// Response
export const MockResSuccessGetEvents: IResEvents = {
  response: MockGetEvents,
  success: true,
  message: "message",
};
export const MockResSuccessGetAllEvents: IResEvents = {
  responseAll: MockGetAllEvents,
  success: true,
  message: "message",
};

export const MockResSuccessEvents: IResEvents = {
  success: true,
  message: "message",
};
export const MockResErrorEvents: IResEvents = {
  success: false,
  message: "Error Events",
};
