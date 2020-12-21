import Buff from '../../domain/Buff';

export default interface IBuffService {
  getBuff(id: number): Promise<Buff | null>
}
