import { ResponseType, Method } from 'axios';

export interface SportBuffClientConfig extends SportBuffClientMethodConfig {
  url?: string;
  method?: Method;
  baseURL?: string;
  timeout?: number;
  responseType?: ResponseType;
}

export interface SportBuffClientMethodConfig {
  headers?: Record<string, string>;
  responseType?: ResponseType;
}
