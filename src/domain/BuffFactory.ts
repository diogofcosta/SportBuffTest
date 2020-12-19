import { BuffResponse } from './types';
import Buff from './Buff';

export default class BuffFactory {
  /**
     * Creates a new Buff instance based on a subset of info from BuffResponse from the API
     */
  static create(data: BuffResponse): Buff {
    return new Buff(data.id, data.question, data.participation_points, data.duration, data.author, data.answers);
  }
}
