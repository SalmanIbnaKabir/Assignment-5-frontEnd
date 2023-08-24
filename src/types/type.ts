export interface IBook {
  _id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  owner: string;
  reviews?: string[];
  __v?: number;
  updatedAt?: string;
  createdAt?: string;
}
