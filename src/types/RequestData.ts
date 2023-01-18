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
