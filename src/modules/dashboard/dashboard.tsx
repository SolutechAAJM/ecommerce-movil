import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import stylesG from '../../../stylesG';
import { CartShopping } from '../../../Icons';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CategoryItem from './components/Category';
import Nav from '../../components/Nav';
import ActiveNav from '../../components/ActiveNav';
import Products from './components/Products';
import { DashServices } from './utils/Request';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
interface Category {
  id: number;
  name: string;
  urlimage: string;
  type: string | null;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  characteristics: object;
  images: string[];
}

type CategoryProductsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CategoryProducts'
>

function Dashboard(): React.JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [types, setTypes] = useState<Category[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [dataPrecarged, setDataPrecarged] = useState({ product: false, category: false, type: false });

  const navigation = useNavigation<CategoryProductsScreenNavigationProp>();

  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CategoryProducts', { method: item.type, id: item.id, name: item.name })}>
      <CategoryItem category={item} />
    </TouchableOpacity>
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Product', {id: item.id})}>
      <Products props={item} />
    </TouchableOpacity>
  );

  const product = async () => {
    DashServices.productsRequest()
      .then(response => {
        if (response.data.status === 200) {
          setProducts(response.data.body);
        }
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
      });
  };

  const getCategories = async () => {
    DashServices.getCategoriesRequest()
      .then(response => {
        if (response.data.status === 200) {
          let categories = response.data.body;
          categories.forEach((category: any) => {
            category.type = 'category';
          });
          setCategories(categories);
        }
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
      });
  };

  const getTypes = async () => {
    DashServices.getTypesRequest()
      .then(response => {
        if (response.data.status === 200) {
          let types = response.data.body;

          types.forEach((type: any) => {
            type.type = 'type';
          });

          setTypes(types);
        }
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
      });
  };

  useEffect(() => {
    if (!dataPrecarged.product) {
      product();
      setDataPrecarged(prevState => ({
        ...prevState,
        product: true
      }));
    }

    if (!dataPrecarged.category) {
      getCategories();
      setDataPrecarged(prevState => ({
        ...prevState,
        category: true
      }));
    }

    if (!dataPrecarged.type) {
      getTypes();
      setDataPrecarged(prevState => ({
        ...prevState,
        type: true
      }));
    }
  }, []);

  const goToShopCart = () => {
    navigation.navigate('ShoppingCart');
  }

  return (
    <TouchableWithoutFeedback onPress={() => setIsActive(false)}>
      <SafeAreaView style={styles.vwDashboard}>
        <Nav isActive={isActive} setIsActive={setIsActive} />
        <ScrollView>
          <View style={styles.vwPrincipal}>
            <View style={styles.vwCommon}>
              <ActiveNav setIsActive={setIsActive} />
              <View style={styles.vwSearcher}>
                <TextInput
                  style={styles.txtSearcher}
                  placeholder="I am looking for..."
                />
                <TouchableOpacity 
                  onPress={goToShopCart}
                >
                  <CartShopping size={30} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.vwCommon}>
              <Text style={styles.txtTitles}>Categorias</Text>
              <View style={styles.vwCategories}>
                <FlatList
                  data={categories}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
              <Text style={[styles.textType, styles.txtTitles]}>Tipos</Text>
              <View style={styles.vwTypes}>
                <FlatList
                  data={types}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
            </View>
            <View style={[styles.vwCommon, styles.vwProducts]}>
              <Text style={styles.txtTitles}>Productos</Text>
              <FlatList
                data={products}
                pagingEnabled
                renderItem={renderProduct}
                keyExtractor={(productItem) => productItem.id.toString()}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  vwDashboard: {
    height: '100%'
  },
  vwPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  vwCommon: {
    width: '96%',
    minHeight: 150,
    marginTop: 30,
    padding: 6,
    backgroundColor: stylesG.primaryColor,
    borderRadius: 16,
  },
  txtTitles:{
    fontSize:24,
    color:'black'
  },
  vwProducts:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  vwSearcher: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtSearcher: {
    minWidth: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  vwCategories: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  vwTypes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textType: {
    marginTop: 10
  },
  ejemplo: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
  }
});

export default Dashboard;
