import IBuffController from './IBuffController';
import IBuffService from '../../service/Buff/IBuffService';
import BuffServiceFactory from '../../service/Buff/BuffServiceFactory';
import BuffController from './BuffController';

export default class BuffControllerFactory {
  static create(): IBuffController {
    const buffService: IBuffService = BuffServiceFactory.create();

    return new BuffController(buffService);
  }
}
