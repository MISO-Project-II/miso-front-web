import { NgxGaugeCap, NgxGaugeType } from "src/constanst/data.constants";
import { IGenericResponse } from "../local/generic.interface";
export interface ISession {
  type: NgxGaugeType; // full, semi, arch
  value: number;
  label: string;
  append: string;
  size: number;
  min: number;
  max: number;
  cap: NgxGaugeCap; // "round", "butt"
  thick: number;
  foregroundColor: string;
  backgroundColor: string;
  prepend: string;
  duration: number;
  thresholds: {};
  markers: {};
  margin: number;
  animate: boolean;
  arialabel: string;
  arialabelledby: string;
}

export interface ValueSession {
  id?: number;
  value: number;
  label: string;
  append: string;
  min: number;
  max: number;
}

export interface ISetSession {
  id?: number;
  startSession: string;
  endSession: string;
  calories: number;
  values: ValueSession[];
}

export interface IResSetSession extends IGenericResponse {
  result: ISetSession | null;
}
