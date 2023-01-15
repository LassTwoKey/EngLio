import { ICard } from "./Card";

export interface InitialFlashCardState {
  isInit: boolean;
  cards: ICard[] | null;
  existingCards: ICard[] | null;
  correctNum: number;
  currentNumber: number;
  errorSelect: boolean;
  successSelect: boolean;
  isAnswered: boolean;
  isFavorited: boolean;
  isSumbitted: boolean;
}
