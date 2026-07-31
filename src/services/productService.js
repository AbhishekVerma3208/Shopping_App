import { api } from './api';

export const getProducts = async (limit = 30) => {
  try {
    const response = await api.get(`/products?limit=${limit}`);
    return response.data.products || [];
  } catch (error) {
    throw new Error(error.message || 'Failed to load products');
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message || 'Failed to load product details');
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await api.get(`/products/search?q=${query}`);
    return response.data.products || [];
  } catch (error) {
    throw new Error(error.message || 'Failed to search products');
  }
};