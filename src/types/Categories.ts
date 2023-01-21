export interface ICategory {
  descr: string;
  id: string;
  title: string;
  img: string;
}

export interface ICategoryItem {
  id: string;
  text: string;
  transcription: string;
  translate: string;
  uniqueId?: string;
}
