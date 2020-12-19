import Response from './Response';

export default class SportBuffClientError extends Error {
  public readonly response: Response | null;

  constructor(message: string, response?: Response) {
    super(message);

    this.response = response || null;
  }
}
