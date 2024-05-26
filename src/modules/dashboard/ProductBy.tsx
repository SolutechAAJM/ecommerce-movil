import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
}

interface ProductsByRouteParams {
  name: string;
  products: Product[];
}

type ProductsByRouteProp = RouteProp<{ ProductBy: ProductsByRouteParams }, 'ProductBy'>;

const ProductsBy: React.FC = () => {
  const route = useRoute<ProductsByRouteProp>();
  const { name, products } = route.params;

  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      <FlatList
        data={item.images}
        renderItem={({ item: image }) => (
          <Image source={{ uri: image }} style={styles.productImage} />
        )}
        keyExtractor={(image, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Productos by {name}</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productList: {
    alignItems: 'center',
  },
  productItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  productName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    color: 'gray',
  },
});

export default ProductsBy;
