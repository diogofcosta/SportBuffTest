import IBuffService from './IBuffService';
import { SportBuffClientConfig } from '../../client/Config';
import SportBuffClientFactory from '../../client/SportBuffClientFactory';
import BuffService from './BuffService';

export default class BuffServiceFactory {
  static create(): IBuffService {
    const httpClientOptions: SportBuffClientConfig = {
      // TODO: should this be configurable? maybe an env var or in a config file?
      baseURL: 'http://demo2373134.mockable.io/',
    };

    return new BuffService(SportBuffClientFactory.create(httpClientOptions));
  }
}
