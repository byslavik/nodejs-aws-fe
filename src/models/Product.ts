import * as Yup from 'yup';

export interface Product {
  id: string;
  brand: string;
  model: string;
  year: number;
  description: string;
  price: number;
  inStock: boolean;
  imgUrl: string;
}

export const ProductSchema = Yup.object().shape({
  id: Yup.string().required(),
  brand: Yup.string().required(),
  model: Yup.string().required(),
  year: Yup.number().required(),
  inStock: Yup.boolean().required(),
  imgUrl: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
