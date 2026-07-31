import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>${product.price}</Text>
          {product.discountPercentage > 0 && (
            <Text style={styles.discount}>-{product.discountPercentage}%</Text>
          )}
        </View>
        <View style={styles.row}>
          <View style={styles.ratingContainer}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.rating}>{product.rating}</Text>
          </View>
          <View style={styles.stockContainer}>
            <Text style={styles.stockIcon}>📦</Text>
            <Text style={styles.stock}>{product.stock} in stock</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: colors.grayLight,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  brand: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  discount: {
    fontSize: 12,
    color: colors.error,
    marginLeft: 8,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grayLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  star: {
    fontSize: 12,
  },
  rating: {
    fontSize: 12,
    color: colors.text,
    marginLeft: 4,
    fontWeight: '500',
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  stockIcon: {
    fontSize: 12,
  },
  stock: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
  },
});