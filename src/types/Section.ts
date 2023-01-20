import { ICategoryItem } from "./Categories";

export interface ISection {
  id: string;
  name: string;
  words?: ICategoryItem[] | null;
  phrasal_verbs?: ICategoryItem[] | null;
  phrases?: ICategoryItem[] | null;
  expressions?: ICategoryItem[] | null;
  [key: string]: any;
}
