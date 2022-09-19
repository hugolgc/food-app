export interface Receipt {
  id: string;
  fields: {
    name: string;
    duration: number;
    difficulty: string;
    ingredients: string[];
    thumbnail: [{ url: string }];
  }
}