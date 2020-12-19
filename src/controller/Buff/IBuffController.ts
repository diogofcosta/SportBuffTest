import Buff from '../../domain/Buff';

export default interface IBuffController {
  getBuff(id: number): Promise<Buff>
}
