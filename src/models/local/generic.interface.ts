export interface IGenericResponse {
  success: boolean;
  errorMessage?: string;
  date?: Date | null;
}
export interface IGenericRequest {
  date?: Date;
}
