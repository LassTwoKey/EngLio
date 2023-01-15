import { InitialFlashCardState } from "../types/FlashCardState";
import { ActionKind } from "../data/enums";

export const initialFlashCardState = {
  isInit: false,
  cards: null,
  existingCards: null,
  correctNum: 0,
  currentNumber: 1,
  errorSelect: false,
  successSelect: false,
  isAnswered: false,
  isFavorited: false,
  isSumbitted: false
};

export const flashCardReducer = (state: InitialFlashCardState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.SetIsInit:
      return { ...state, isInit: payload };
    case ActionKind.SetCards:
      return { ...state, cards: payload };
    case ActionKind.SetExistingCards:
      return { ...state, existingCards: payload };
    case ActionKind.SetCorrectNum:
      return { ...state, correctNum: state.correctNum + 1 };
    case ActionKind.SetCurrentNumber:
      return { ...state, currentNumber: state.currentNumber + 1 };
    case ActionKind.SetErrorSelect:
      return { ...state, errorSelect: payload };
    case ActionKind.SetSuccessSelect:
      return { ...state, successSelect: payload };
    case ActionKind.SetIsAnswered:
      return { ...state, isAnswered: payload };
    case ActionKind.SetIsFavorited:
      return { ...state, isFavorited: payload };
    case ActionKind.SetIsSumbitted:
      return { ...state, isSumbitted: payload };
    default:
      return { ...state };
  }
};
