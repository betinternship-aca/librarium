import {IAuthor} from './IAuthor';
import {ICategory} from './ICategory';

export interface IBook {
  authors: IAuthor[];
  authorIds: string[];
  bookId: string;
  bookName: string;
  categoryIds: string[];
  categories: ICategory[];
  description: string;
  editionYear: Date;
  image: string;
  language?: string;
  // countOfDownloads: number;
}
