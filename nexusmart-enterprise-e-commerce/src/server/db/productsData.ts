import { Product } from '../../types';
import { initialCategories } from './categoriesData';
import { productsPart1 } from './productsData1';
import { productsPart2 } from './productsData2';
import { productsPart3 } from './productsData3';

export { initialCategories };

export const initialProducts: Product[] = [
  ...productsPart1,
  ...productsPart2,
  ...productsPart3,
];
