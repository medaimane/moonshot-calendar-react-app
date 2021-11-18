import {getApiBaseUrl} from './getApiBaseUrl';

export interface NetworkingServiceConfig {
  readonly baseUrl: string;
  readonly timeout: number;
}

export class DevNetworkingServiceConfig implements NetworkingServiceConfig {
  readonly baseUrl = getApiBaseUrl();
  readonly timeout = 30000;
}
