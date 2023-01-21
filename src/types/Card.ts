export interface IAnswer {
  value: string;
  selected: boolean;
}

export interface ICard {
  id: string;
  word: string;
  transcription: string;
  correctTranslate: string;
  answerOptions: IAnswer[];
  prevState?: null;
  uniqueId?: string;
}
