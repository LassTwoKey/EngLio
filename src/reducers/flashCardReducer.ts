import { InitialFlashCardState } from "../types/FlashCardState";

export enum ActionKind {
  SetIsInit = "setIsInit",
  SetCards = "setCards",
  SetExistingCards = "setExistingCards",
  SetCorrectNum = "setCorrectNum",
  SetCurrentNumber = "setCurrentNumber",
  SetErrorSelect = "setErrorSelect",
  SetSuccessSelect = "setSuccessSelect",
  SetIsAnswered = "setIsAnswered",
  SetIsFavorited = "setIsFavorited",
  SetIsSumbitted = "setIsSumbitted",
  SetIsCategory = "setIsCategory"
}

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
  isSumbitted: false,
  isCategory: false
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
      return {
        ...state,
        currentNumber: !payload ? state.currentNumber + 1 : payload
      };
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
    case ActionKind.SetIsCategory:
      return { ...state, isCategory: payload };
    default:
      return { ...state };
  }
};

export const setIsInit = (payload: any) => ({
  type: ActionKind.SetIsInit,
  payload: payload
});
export const setCards = (payload: any) => ({
  type: ActionKind.SetCards,
  payload: payload
});
export const setExistingCards = (payload: any) => ({
  type: ActionKind.SetExistingCards,
  payload: payload
});
export const setCorrectNum = () => ({
  type: ActionKind.SetCorrectNum
});
export const setCurrentNumber = (payload?: number) => ({
  type: ActionKind.SetCurrentNumber,
  payload: payload
});
export const setErrorSelect = (payload: any) => ({
  type: ActionKind.SetErrorSelect,
  payload: payload
});
export const setSuccessSelect = (payload: any) => ({
  type: ActionKind.SetSuccessSelect,
  payload: payload
});
export const setIsAnswered = (payload: any) => ({
  type: ActionKind.SetIsAnswered,
  payload: payload
});
export const setIsFavorited = (payload: any) => ({
  type: ActionKind.SetIsFavorited,
  payload: payload
});
export const setIsSumbitted = (payload: any) => ({
  type: ActionKind.SetIsSumbitted,
  payload: payload
});
export const setIsCategory = (payload: any) => ({
  type: ActionKind.SetIsCategory,
  payload: payload
});
