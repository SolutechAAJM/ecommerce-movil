import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, Button } from 'react-native';
import { RouteProp, useRoute, useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App'; 

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
  const [isRedirecting, setIsRedirecting] = useState(false);

  const route = useRoute<ProductsByRouteProp>();
  const { name, products } = route.params;

  console.log(JSON.stringify(products));

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (isRedirecting) return;

      // Prevenir el comportamiento por defecto
      e.preventDefault();

      // Prevenir recursión
      setIsRedirecting(true);

      // Navegar a Dashboard
      navigation.navigate('Dashboard');
    });

    return unsubscribe;
  }, [navigation, isRedirecting]);

  const renderProductItem = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.images[0]?.url }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Añadir al carrito" onPress={() => {}} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Ver" onPress={() => { }} />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
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
    flexDirection: 'column',
    alignItems: 'center',
    margin: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    width: 300,  
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
  buttonContainer: {
    flexDirection: 'column',  
    width: '85%',
    marginTop: 8,
  },
  buttonWrapper: {
    marginVertical: 4, 
  },
});

export default ProductsBy;
