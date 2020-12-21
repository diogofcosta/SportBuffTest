import IBuffController from './IBuffController';
import Buff from '../../domain/Buff';
import IBuffService from '../../service/Buff/IBuffService';

export default class BuffController implements IBuffController {
  private readonly buffService: IBuffService;

  constructor(buffService: IBuffService) {
    this.buffService = buffService;
  }

  async getBuff(id: number): Promise<Buff> {
    const buff = await this.buffService.getBuff(id);

    // if we don't find buffs do we throw an error? for now our service that communicates with the API either returns
    // a Buff instance or a null in case something went wrong (didnt find it or any other error)
    if (!buff) {
      throw new Error('Buff not found');
    }

    return buff;
  }
}
