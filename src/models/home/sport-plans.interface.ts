export interface SportFrecuency {
  idSportFrecuency: number;
  minute: number;
  hour: number;
  dayLetter: string;
}

export interface Sport {
  idsports: number;
  name: string;
  description: string;
  sport_type: string;
}

export interface SportRoutineList {
  idSportRoutine: number;
  sportFrecuency: SportFrecuency;
  sports: Sport[];
  name: string;
  description: string;
}

export interface ISportPlans {
  idSportPlan: number;
  name: string;
  description: string;
  planType: string;
  sportRoutineList: SportRoutineList[];
}
