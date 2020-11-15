import * as Yup from 'yup';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imgurl: string;
  count: number;
}

export const ProductSchema = Yup.object().shape({

  title: Yup.string().required(),
  imgurl: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  count: Yup.number()
});
