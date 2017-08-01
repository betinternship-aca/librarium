/**
 * Created by voska_000 on 31.07.2017.
 */
import * as express from 'express';
import {readFileSync} from 'fs';
import {join} from 'path';

const filePath = join(__dirname, './data/categories.db.json');

export class Category {
  categoryId: string;
  name: string;

  constructor() {
  }

  static getAllCategories(): Category[] {
    return JSON.parse(readFileSync(filePath).toString());
  }
  static getCategory(categoryId: string): Category {
    const categories = this.getAllCategories();
    return categories.find(category => category.categoryId === categoryId);
  }
}
export const CategoryRouter = express.Router();

CategoryRouter.get('/category-list', (req, res) => {
  res.json(Category.getAllCategories());
});






