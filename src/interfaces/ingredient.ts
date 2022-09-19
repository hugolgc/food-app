export interface Ingredient {
  id: string;
  fields: {
    name: string;
    receipts: string[];
  }
}