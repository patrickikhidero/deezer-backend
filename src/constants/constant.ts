export type HttpResponse = [boolean, number, string, string, any];
export function isNullOrUndefined(value: any) {
  return value === undefined || value === null;
}

export const DEEZER_API_URL = 'https://api.deezer.com';

export interface IResponse {
  status: number;
  message: string;
  data: any;
}
