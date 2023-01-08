import { ICard } from "../types/Card";
export const data: ICard[] = [
  {
    id: 1,
    word: "Robber",
    transcription: "[ˈräbər]",
    correctTranslate: "грабитель",
    answerOptions: [
      { value: "Грабитель", selected: false },
      { value: "Дом", selected: false },
      { value: "Храм", selected: false }
    ]
  },
  {
    id: 2,
    word: "Think",
    transcription: "[THiNGk]",
    correctTranslate: "думать",
    answerOptions: [
      { value: "Бегать", selected: false },
      { value: "Считить", selected: false },
      { value: "Думать", selected: false }
    ]
  },
  {
    id: 3,
    word: "Swim",
    transcription: "[swim]",
    correctTranslate: "плавать",
    answerOptions: [
      { value: "Плавать", selected: false },
      { value: "Учить", selected: false },
      { value: "Брать", selected: false }
    ]
  },
  {
    id: 4,
    word: "House",
    transcription: "[haʊs]",
    correctTranslate: "дом",
    answerOptions: [
      { value: "Грабитель", selected: false },
      { value: "Дом", selected: false },
      { value: "Животное", selected: false }
    ]
  },
  {
    id: 5,
    word: "Cat",
    transcription: "[kæt]",
    correctTranslate: "кошка",
    answerOptions: [
      { value: "Кошка", selected: false },
      { value: "Игра", selected: false },
      { value: "Храм", selected: false }
    ]
  }
];
