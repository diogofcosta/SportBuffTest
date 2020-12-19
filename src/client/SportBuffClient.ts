import { AxiosInstance, AxiosResponse } from 'axios';
import ISportBuffClient from './ISportBuffClient';
import { SportBuffClientConfig, SportBuffClientMethodConfig } from './Config';
import SportBuffClientResponse from './Response';
import SportBuffClientError from './Error';

export default class SportBuffClient implements ISportBuffClient {
  private readonly httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  public async get(url: string, options?: SportBuffClientMethodConfig): Promise<SportBuffClientResponse> {
    return this.request({
      method: 'GET',
      url,
      ...options,
    });
  }

  private async request(options: SportBuffClientConfig): Promise<SportBuffClientResponse> {
    try {
      const response: AxiosResponse = await this.httpClient.request(options);

      return SportBuffClient.createResponseFrom(response);
    } catch (err) {
      if (err.response) {
        throw new SportBuffClientError(err.message, SportBuffClient.createResponseFrom(err.response));
      }

      throw new SportBuffClientError(err.message);
    }
  }

  private static createResponseFrom(response: AxiosResponse): SportBuffClientResponse {
    return {
      statusCode: response.status,
      body: response.data,
      headers: response.headers,
    };
  }
}
