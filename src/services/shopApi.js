import axios from 'axios';
import { API_URLS } from '../constants/api';

export const getSneakers = async signal => {
  const { data } = await axios.get(API_URLS.sneakers, { signal });
  return data;
};

export const getCart = async signal => {
  const { data } = await axios.get(API_URLS.cart, { signal });
  return data;
};

export const addCartItem = async product => {
  const cartItem = {
    title: product.title,
    price: Number(product.price),
    imageUrl: product.imageUrl,
    productId: product.id,
  };

  const { data } = await axios.post(API_URLS.cart, cartItem);

  return data;
};

export const removeCartItem = async id => {
  await axios.delete(`${API_URLS.cart}/${id}`);
};
