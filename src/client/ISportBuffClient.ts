import { SportBuffClientMethodConfig } from './Config';
import SportBuffClientResponse from './Response';

export default interface ISportBuffClient {
  get(url: string, options?: SportBuffClientMethodConfig): Promise<SportBuffClientResponse>
}
