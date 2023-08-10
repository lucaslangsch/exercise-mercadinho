import { CartItem } from './types/CartItem';
import { Drink } from './types/Drink';
import { Food } from './types/Food';

export function first<Type>(arr: Type[]): Type {
  return arr[0];
}

export function updateItem<Type>(arr: Type[], index: number, item: Type): Type[] {
  if (index >= 0 && index < arr.length) arr.splice(index, 1, item);
  return arr;
}

export function buildCartItem(item: (Food | Drink), quantity: number): CartItem {
  const { name, price } = item;
  return { name, price, quantity } as CartItem;
}
