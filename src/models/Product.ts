import * as Yup from 'yup';

export interface Product {
  id: string;
  brand_id: string;
  title: string;
  brand_name: string;
  category_id: string;
  category_name: string;
  description: string;
  price: number;
  imgurl: string;
  count: number;
}

export const ProductSchema = Yup.object().shape({
  id: Yup.string().required(),
  title: Yup.string().required(),
  brand_name: Yup.string().required(),
  brand_id: Yup.string().required(),
  category_name: Yup.string().required(),
  category_id: Yup.string().required(),
  year: Yup.number().required(),
  imgUrl: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  count: Yup.number(),
});
