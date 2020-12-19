import IBuffController from './IBuffController';
import Buff from '../../domain/Buff';
import IBuffService from '../../service/Buff/IBuffService';

export default class BuffController implements IBuffController {
  private readonly buffService: IBuffService;

  constructor(buffService: IBuffService) {
    this.buffService = buffService;
  }

  async getBuff(id: number): Promise<Buff> {
    try {
      const buff = await this.buffService.getBuff(id);

      if (!buff) {
        throw new Error('Buff not found');
      }

      return buff;
    } catch (err) {
      throw new Error(`Error - ${err}`);
    }
  }
}
