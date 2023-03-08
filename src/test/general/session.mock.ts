import { ISession } from "src/models/general/session.interface";

// #f85716: #f85716;
// $ds-primary-02: #ff9000;
// // Dark
// $ds-dark-01: #000000;
// // Grey
// $ds-grey-01: #4d4d4d;
// $ds-grey-02: #f5f5f5;
// $ds-grey-03: #bababa;
// // White
// $ds-white-01: #ffffff;
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
export const MockSessions: ISession[] = [
  {
    type: "full",
    value: getRandomInt(100),
    label: "Velocidad1",
    append: "Km/h",
    size: 250,
    min: 0,
    max: 100,
    cap: "butt", // "round", "butt"
    thick: 30,
    foregroundColor: "#f85716",
    backgroundColor: "#bababa",
    prepend: "😀",
    duration: 1000,
    thresholds: {
      "10": { color: "#fffc97" },
      "50": { color: "#ceff97" },
      "80": { color: "#ff9797" },
    },
    markers: {
      "50": {
        color: "#f85716",
        type: "triangle",
        size: 8,
        label: "Goal",
        font: "12px arial",
      },
    },
    margin: 30,
    animate: true,
    arialabel: "Velocidad",
    arialabelledby: "Velocidad",
  },
  {
    type: "semi",
    value: getRandomInt(100),
    label: "Velocidad2",
    append: "Km/h",
    size: 250,
    min: 0,
    max: 100,
    cap: "butt", // "round", "butt"
    thick: 30,
    foregroundColor: "#f85716",
    backgroundColor: "#bababa",
    prepend: "😀",
    duration: 1000,
    thresholds: {
      "10": { color: "#fffc97" },
      "50": { color: "#ceff97" },
      "80": { color: "#ff9797" },
    },
    markers: {
      "50": {
        color: "#f85716",
        type: "triangle",
        size: 8,
        label: "Goal",
        font: "12px arial",
      },
    },
    margin: 30,
    animate: true,
    arialabel: "Velocidad",
    arialabelledby: "Velocidad",
  },
  {
    type: "arch",
    value: getRandomInt(100),
    label: "Velocidad3",
    append: "Km/h",
    size: 250,
    min: 0,
    max: 100,
    cap: "butt", // "round", "butt"
    thick: 30,
    foregroundColor: "#f85716",
    backgroundColor: "#bababa",
    prepend: "😀",
    duration: 1000,
    thresholds: {
      "10": { color: "#fffc97" },
      "50": { color: "#ceff97" },
      "80": { color: "#ff9797" },
    },
    markers: {
      "50": {
        color: "#f85716",
        type: "triangle",
        size: 8,
        label: "Goal",
        font: "12px arial",
      },
    },
    margin: 30,
    animate: true,
    arialabel: "Velocidad",
    arialabelledby: "Velocidad",
  },
];
