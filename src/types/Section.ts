import { ICard } from "./Card";

export interface ISection {
  id: string;
  name: string;
  words?: ICard[] | null;
  phrasal_verbs?: ICard[] | null;
  phrases?: ICard[] | null;
  expressions?: ICard[] | null;
  [key: string]: any;
}
