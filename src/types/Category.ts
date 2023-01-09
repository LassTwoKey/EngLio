export interface ICategoryItem {
  id: number;
  text: string;
  transcription: string;
  translate: string;
}

export interface IFavoriteCategory {
  name: string;
  list: ICategoryItem[];
}

export type CategoryType =
  | "words"
  | "phrases"
  | "expressions"
  | "phrasal-verbs";

export interface IFavorite {
  words: IFavoriteCategory;
  phrases: IFavoriteCategory;
  expressions: IFavoriteCategory;
  [phrasal_verbs: string]: IFavoriteCategory;
}
