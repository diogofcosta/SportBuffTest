import axios from 'axios';
import { SportBuffClientConfig } from './Config';
import ISportBuffClient from './ISportBuffClient';
import SportBuffClient from './SportBuffClient';

export default class SportBuffClientFactory {
  public static create(options?: SportBuffClientConfig): ISportBuffClient {
    return new SportBuffClient(
      axios.create({
        timeout: 30000, // 30s for request timeouts to the api might be too long.. but it's adjustable
        ...options,
      }),
    );
  }
}
