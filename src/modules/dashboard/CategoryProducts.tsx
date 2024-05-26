import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DashServices } from './utils/Request';


interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
}

interface CategoryProductsRouteParams {
  type:string
}

type CategoryProductsRouteProp = RouteProp<{ CategoryProducts: CategoryProductsRouteParams }, 'CategoryProducts'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'CategoryProducts'>;

const CategoryProducts: React.FC = (data:any) => {
  const route = useRoute<CategoryProductsRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { type } = route.params;

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DashServices.getProductsBy(data)
      .then((response:any) => {
        if (response.data.status === 200) {
          setProducts(response.data.body);
          setLoading(false);
          let typeName = "Tipos";
          navigation.navigate('ProductBy', { name: typeName, products: response.data.body });
        }
      })
      .catch((error:any) => {
        alert(JSON.stringify(error.response));
        setLoading(false);
      });
  }, [categoryId, typeName]);

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
