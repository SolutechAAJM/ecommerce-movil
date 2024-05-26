import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Nav from '../../components/Nav';
import ActiveNav from '../../components/ActiveNav';
interface ImageI {
  id: number;
  url: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  images: ImageI[];
}

interface ProductsByRouteParams {
  name: string;
  products: Product[];
}

type ProductsByRouteProp = RouteProp<{ ProductBy: ProductsByRouteParams }, 'ProductBy'>;

const ProductsBy: React.FC = () => {

  const [isActive, setIsActive] = useState(false);

  const route = useRoute<ProductsByRouteProp>();
  const { name, products } = route.params;

  console.log(JSON.stringify(products))

  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>

      {/* <Text>Aguapanrl</Text> */}
      <FlatList
        data={item.images}
        renderItem={({ item: image }) => (
          <Image source={{ uri: image.url }} style={styles.productImage} />
        )}
        keyExtractor={(image) => image.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    // <TouchableWithoutFeedback onPress={() => setIsActive(false)}>
      <SafeAreaView style={styles.container}>
        {/* <Nav isActive={isActive} setIsActive={setIsActive} /> */}
        {/* <ActiveNav setIsActive={setIsActive} /> */}

        <Text style={styles.title}>{name}</Text>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          // numColumns={2}
          pagingEnabled
          showsHorizontalScrollIndicator={false}

          contentContainerStyle={styles.productList}
        />
      </SafeAreaView>
    // </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    height: '100%',
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
