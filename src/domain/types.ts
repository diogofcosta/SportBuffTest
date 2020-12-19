export type BuffAnswer = {
  id: number,
  buff_id: number,
  title: string,
  image: string[],
  bg_color: string,
  fg_color: string
};

export type BuffAuthor = {
  id: number,
  first_name: string,
  last_name: string[],
  photo: string[]
};

export type BuffResponse = {
  id: number,
  stream_id: number,
  client_id: number,
  user_id: number,
  name: string,
  question: string,
  participation_points: number,
  type: number,
  status: number,
  statusText: string,
  language: string,
  public: boolean,
  priority: number,
  replay: boolean,
  delay: number,
  duration: number,
  play_at?: string,
  resolve_at?: string,
  resolved_at?: string,
  published_at?: string,
  expire_at: number,
  expires_at: string,
  author: BuffAuthor,
  answers: BuffAnswer[]
};
