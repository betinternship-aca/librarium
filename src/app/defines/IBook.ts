import {IAuthor} from './IAuthor';
import {ICategory} from './ICategory';

export interface IBook {
  bookId: string;
  bookName: string;
  orgId: string;
  authorIds: string[];
  authors: IAuthor[];
  categoryIds: string[];
  categories: ICategory[];
  description: string;
  editionYear: Date;
  image: string;
  language?: string;
  reserved: boolean;
  price: number;
}
