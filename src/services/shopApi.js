import { supabase } from './supabaseClient';

export const getSneakers = async signal => {
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .order('id', { ascending: true })
    .abortSignal(signal);

  if (error) {
    throw error;
  }

  return data;
};

export const getCart = async signal => {
  const { data, error } = await supabase
    .from('cart')
    .select('*')
    .order('id', { ascending: true })
    .abortSignal(signal);

  if (error) {
    throw error;
  }

  return data;
};

export const addCartItem = async product => {
  const cartItem = {
    title: product.title,
    price: Number(product.price),
    imageUrl: product.imageUrl,
    productId: product.id,
  };

  const { data, error } = await supabase.from('cart').insert(cartItem).select().single();

  if (error) {
    throw error;
  }

  return data;
};

export const removeCartItem = async id => {
  const { error } = await supabase.from('cart').delete().eq('id', id);

  if (error) {
    throw error;
  }
};

export const getFavorites = async signal => {
  const { data, error } = await supabase
    .from('favorites')
    .select('productId')
    .order('id', { ascending: true })
    .abortSignal(signal);

  if (error) {
    throw error;
  }

  return data.map(item => item.productId);
};

export const addFavorite = async productId => {
  const { error } = await supabase.from('favorites').upsert(
    { productId },
    {
      onConflict: 'productId',
      ignoreDuplicates: true,
    },
  );

  if (error) {
    throw error;
  }

  return productId;
};

export const removeFavorite = async productId => {
  const { error } = await supabase.from('favorites').delete().eq('productId', productId);

  if (error) {
    throw error;
  }
};
