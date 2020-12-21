import IBuffService from './IBuffService';
import ISportBuffClient from '../../client/ISportBuffClient';
import Buff from '../../domain/Buff';
import BuffFactory from "../../domain/BuffFactory";

export default class BuffService implements IBuffService {
  private readonly sportBuffClient: ISportBuffClient;

  constructor(sportBuffClient: ISportBuffClient) {
    this.sportBuffClient = sportBuffClient;
  }

  async getBuff(id: number): Promise<Buff | null> {
    try {
      const url = `buff/${id}`;

      console.log(`Fetching buff with id ${id}`);
      const result = await this.sportBuffClient.get(url);
      console.log(`Successfully fetched buff with id ${id}`);

      // map API content to Buff Entity and return it
      return BuffFactory.create(result.body.data);
    } catch (err) {
      // TODO: substitute this with a proper logger for test purposes this is enough
      console.error(`Error: Something went wrong while fetching the buff with id ${id} - ${err.message}`);

      // we might want a different output if the API doesn't return us data, for now we simply return null
      return null;
    }
  }
}
