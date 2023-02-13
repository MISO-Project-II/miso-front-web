import { IResEvents, IEvents } from "src/models/home/events.interface";

// Data request
export const MockEvent: IEvents = {
  title: "Media maraton",
  description: "Este evento es media maraton",
  startPlace: "Plaza central",
  destinyPlace: "Parque norte",
  date: new Date(),
  eventCategoryId: "INSIDE_OF_HOUSE",
  thirdId: "1",
};
// Data Response
export const MockGetEvents: IEvents[] = [
  {
    id: "1",
    title: "Media maraton1",
    description: "Este evento es media maraton1",
    startPlace: "Plaza central1",
    destinyPlace: "Parque norte1",
    date: new Date(),
    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "1",
  },
  {
    id: "2",
    title: "Rodada ciclista2",
    description: "Este evento es rodada ciclista2",
    startPlace: "Parque oriental2",
    destinyPlace: "Parque sur2",
    date: new Date(),
    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "2",
  },
  {
    id: "3",
    title: "Gimnasia al sofa3",
    description: "Este evento es gimnasia al sofa3",
    startPlace: "En casa3",
    date: new Date(),
    eventCategoryId: "INSIDE_OF_HOUSE",
    thirdId: "3",
  },
  {
    id: "4",
    title: "Media maraton4",
    description: "Este evento es media maraton4",
    startPlace: "Plaza central4",
    destinyPlace: "Parque norte4",
    date: new Date(),
    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "1",
  },
  {
    id: "5",
    title: "Rodada ciclista5",
    description: "Este evento es rodada ciclista5",
    startPlace: "Parque oriental5",
    destinyPlace: "Parque sur5",
    date: new Date(),
    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "2",
  },
  {
    id: "6",
    title: "Gimnasia al sofa6",
    description: "Este evento es gimnasia al sofa6",
    startPlace: "En casa6",
    date: new Date(),
    eventCategoryId: "INSIDE_OF_HOUSE",
    thirdId: "3",
  },
];
export const MockGetEventsRegistered: IEvents[] = [
  {
    id: "4",
    title: "Media maraton4",
    description: "Este evento es media maraton4",
    startPlace: "Plaza central4",
    destinyPlace: "Parque norte4",
    date: new Date(),
    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "1",
  },
  {
    id: "5",
    title: "Rodada ciclista5",
    description: "Este evento es rodada ciclista5",
    startPlace: "Parque oriental5",
    destinyPlace: "Parque sur5",
    date: new Date(),
    eventCategoryId: "OUTSIDE_OF_HOUSE",
    thirdId: "2",
  },
  {
    id: "6",
    title: "Gimnasia al sofa6",
    description: "Este evento es gimnasia al sofa6",
    startPlace: "En casa6",
    date: new Date(),
    eventCategoryId: "INSIDE_OF_HOUSE",
    thirdId: "3",
  },
];
// Response
export const MockResSuccessGetEvents: IResEvents = {
  result: MockGetEvents,
  success: true,
  message: "Message Ok Events",
};
export const MockResSuccessGetEventsRegistered: IResEvents = {
  result: MockGetEventsRegistered,
  success: true,
  message: "Message Ok Events Registered",
};

export const MockResErrorEvents: IResEvents = {
  success: false,
  message: "Message Error Events",
  result: null,
};
