import IBuffService from './IBuffService';
import ISportBuffClient from '../../client/ISportBuffClient';
import Buff from '../../domain/Buff';

export default class BuffService implements IBuffService {
  private readonly sportBuffClient: ISportBuffClient;

  constructor(sportBuffClient: ISportBuffClient) {
    this.sportBuffClient = sportBuffClient;
  }

  async getBuff(id: number): Promise<Buff> {
    try {
      const url = `buff/${id}`;

      console.log(`Fetching buff with id ${id}`);
      const result = await this.sportBuffClient.get(url);
      console.log(`Successfully fetched buff with id ${id}`);
      return result.body;
    } catch (err) {
      throw new Error(`Error: Something went wrong while fetching the buff with id ${id} - ${err.message}`);
    }
  }
}
