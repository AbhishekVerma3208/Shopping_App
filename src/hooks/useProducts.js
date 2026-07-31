import { useState, useEffect, useCallback } from 'react';
import { getProducts, searchProducts } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const loadProducts = useCallback(async () => {
    try {
      setError(null);
      const data = await getProducts(30);
      if (data && data.length > 0) {
        setProducts(data);
        setFilteredProducts(data);
      } else {
        setError('No products found');
      }
    } catch (err) {
      setError(err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshProducts = useCallback(async () => {
    setRefreshing(true);
    try {
      setError(null);
      const data = await getProducts(30);
      if (data && data.length > 0) {
        setProducts(data);
        if (!searchQuery.trim()) {
          setFilteredProducts(data);
        }
      } else {
        setError('No products found');
      }
    } catch (err) {
      setError(err.message || 'Failed to refresh products');
    } finally {
      setRefreshing(false);
    }
  }, [searchQuery]);

  const search = useCallback(async (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }
    try {
      setError(null);
      const results = await searchProducts(query);
      if (results && results.length > 0) {
        setFilteredProducts(results);
      } else {
        setFilteredProducts([]);
        setError('No products found for your search');
      }
    } catch (err) {
      setError(err.message || 'Failed to search products');
    }
  }, [products]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return {
    products: filteredProducts,
    loading,
    refreshing,
    error,
    searchQuery,
    search,
    refresh: refreshProducts,
    retry: loadProducts,
  };
};