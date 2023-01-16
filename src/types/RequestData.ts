export interface IRequestedCategory {
  descr: string;
  id: string;
  title: string;
  img: string;
}

export interface ITechnology {
  id: string;
  value: string;
}

export interface IRequestedWelcome {
  mainTitle: string;
  descr: string;
  listTitle: string;
  technologies: ITechnology[];
}

export interface ICategoryItem {
  id: string;
  text: string;
  transcription: string;
  translate: string;
}

export interface IFavoriteCategory {
  name?: string;
  list?: ICategoryItem[];
}

export interface INotification {
  id: string;
  value: string;
}

export interface ISection {
  id: string;
  name: string;
}
