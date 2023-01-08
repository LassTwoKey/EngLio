export interface IAnswer {
  value: string;
  selected: boolean;
}

export interface ICard {
  id: number;
  word: string;
  transcription: string;
  correctTranslate: string;
  answerOptions: IAnswer[];
}