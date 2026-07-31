import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Share,
  Dimensions,
} from 'react-native';
import colors from '../theme/colors';
import Loader from '../components/common/Loader';
import ErrorView from '../components/common/ErrorView';
import { getProductById } from '../services/productService';

const { width } = Dimensions.get('window');

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProduct = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (err) {
      setError(err.message || 'Failed to load product details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  const handleShare = async () => {
    if (!product) return;
    try {
      await Share.share({
        message: `Check out ${product.title} - $${product.price}`,
        title: product.title,
      });
    } catch (error) {
      // Share failed
    }
  };

  if (loading) {
    return <Loader message="Loading product details..." />;
  }

  if (error) {
    return <ErrorView message={error} onRetry={loadProduct} />;
  }

  if (!product) {
    return null;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.shareIcon}>📤</Text>
        </TouchableOpacity>
        {product.discountPercentage > 0 && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{product.discountPercentage}%</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.row}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.originalPrice}>${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.ratingText}>{product.rating}</Text>
            <Text style={styles.ratingCount}>({product.stock} in stock)</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Category</Text>
            <Text style={styles.detailValue}>{product.category}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Brand</Text>
            <Text style={styles.detailValue}>{product.brand}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Stock</Text>
            <Text style={[styles.detailValue, product.stock < 10 && styles.lowStock]}>
              {product.stock} units
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: colors.grayLight,
  },
  image: {
    width: width,
    height: 300,
    resizeMode: 'cover',
  },
  shareButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 30,
  },
  shareIcon: {
    fontSize: 24,
  },
  discountBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: colors.error,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  discountText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
  content: {
    padding: 20,
  },
  brand: {
    fontSize: 14,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
  },
  originalPrice: {
    fontSize: 16,
    color: colors.grayDark,
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grayLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  star: {
    fontSize: 16,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 4,
  },
  ratingCount: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  detailLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  lowStock: {
    color: colors.error,
  },
  addToCartButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
    elevation: 2,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  addToCartText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});