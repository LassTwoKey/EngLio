export interface ITechnology {
  id: string;
  value: string;
}

export interface IWelcome {
  mainTitle: string;
  descr: string;
  listTitle: string;
  technologies: ITechnology[];
}
