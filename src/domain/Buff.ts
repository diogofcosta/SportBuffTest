import { BuffAnswer, BuffAuthor } from './types';

export default class Buff {
  private readonly id: number;

  private readonly question: string;

  private readonly participation_points: number;

  private readonly duration: number;

  private readonly author: BuffAuthor;

  private readonly answers: BuffAnswer[];

  // TODO: id shouldn't be here maybe? But since we're fetching it from the DB
  constructor(
    id: number,
    question: string,
    points: number,
    duration: number,
    author: BuffAuthor,
    answers: BuffAnswer[],
  ) {
    this.id = id;
    this.question = question;
    this.participation_points = points;
    this.duration = duration;
    this.author = author;
    this.answers = answers;
  }

  get getId(): number {
    return this.id;
  }

  get getQuestion(): string {
    return this.question;
  }

  get getParticipationPoints(): number {
    return this.participation_points;
  }

  get getDuration(): number {
    return this.duration;
  }

  get getAuthor(): BuffAuthor {
    return this.author;
  }

  get getAnswers(): BuffAnswer[] {
    return this.answers;
  }
}
