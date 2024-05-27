import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DashServices } from './utils/Request';
import { RootStackParamList } from '../../../App';

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
}

interface CategoryProductsRouteParams {
  method: string;
  id: number;
  name: string;
}

type CategoryProductsRouteProp = RouteProp<{ CategoryProducts: CategoryProductsRouteParams }, 'CategoryProducts'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'CategoryProducts'>;

const CategoryProducts: React.FC = () => {
  const route = useRoute<CategoryProductsRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { method, id, name } = route.params;

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [typeName, setTypeName] = useState('');

  useEffect(() => {
    let typeSearch = '';
    let idType = 0;
    let idCategory = 0;
    if (method === 'type') {
      typeSearch = 'byType';
      idType = id;
      setTypeName(`Productos de tipo: ${name}`);
    } else if (method === 'category') {
      typeSearch = 'byCategory';
      idCategory = id;
      setTypeName(`Productos de categoría: ${name}`);
    }

    const dataProp = {
      'typeSearch': typeSearch,
      'textSearch': '',
      'idType': idType,
      'idCategory':idCategory
    };

    DashServices.getProductsBy(dataProp)
      .then(response => {
        if (response.data.status == 201) {
          console.log(response)
          setProducts(response.data.body);
          navigation.navigate('ProductBy', { name: typeName, products: response.data.body });
        }
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
        alert(JSON.stringify(error.response));
      });
  }, [method, id, name, typeName, navigation]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return null;
};

export default CategoryProducts;
