import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import colors from '../theme/colors';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/common/Loader';
import ErrorView from '../components/common/ErrorView';
import EmptyState from '../components/common/EmptyState';
import { useProducts } from '../hooks/useProducts';
import { useAuth } from '../hooks/useAuth';

export default function HomeScreen({ navigation }) {
  const { products, loading, refreshing, error, searchQuery, search, refresh, retry } = useProducts();
  const { user } = useAuth();

  if (loading) {
    return <Loader message="Loading products..." />;
  }

  if (error) {
    return <ErrorView message={error} onRetry={retry} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back!</Text>
          <Text style={styles.headerTitle}>Products</Text>
        </View>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 22 }}>👤</Text>
        </TouchableOpacity>
      </View>

      <SearchBar value={searchQuery} onChangeText={search} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('Detail', { id: item.id })}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<EmptyState message="No products found" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.grayLight },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  greeting: { fontSize: 12, color: colors.textSecondary },
  headerTitle: { fontSize: 24, fontWeight: '700', color: colors.text, marginTop: 2 },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grayLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  listContent: { paddingVertical: 8, paddingBottom: 20 },
});