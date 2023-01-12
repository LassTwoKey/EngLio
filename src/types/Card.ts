export interface IAnswer {
  value: string;
  selected: boolean;
}

export interface ICard {
  id: number | string;
  word: string;
  transcription: string;
  correctTranslate: string;
  answerOptions: IAnswer[];
  prevState?: null;
}
