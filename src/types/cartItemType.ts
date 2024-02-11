import type { ProductType } from './productType';

export type CartItemType = ProductType & { quantity: number };
