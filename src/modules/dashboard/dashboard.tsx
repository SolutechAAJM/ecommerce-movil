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
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CategoryItem from './components/Category';
import Nav from '../../components/Nav';
import ActiveNav from '../../components/ActiveNav';
import Products from './components/Products';
import { DashServices } from './utils/Request';

interface Category {
  id: number;
  name: string;
}
interface Product{
  id: number;
  name: string;
  description:string;
  price: number,
  stock: number,
  characteristics: object,
  images:Image[],
}
  
  const categories: Category[] = [
    { id: 1, name: 'Categoría 1' },
    { id: 2, name: 'Categoría 2' },
    { id: 3, name: 'Categoría 3' },
    { id: 4, name: 'Categoría 3' },
    { id: 5, name: 'Categoría 1' },
    { id: 6, name: 'Categoría 2' },
  ];

  

  function Dashboard(): React.JSX.Element {
    const [products, setProducts] = useState<Product[]>([])
    const [isActive,setIsActive]=useState(false)

    const renderItem = ({ item }: { item: Category }) => <CategoryItem category={item} />;
    const renderProduct= ({ item }: { item: Product; })=><Products props={item} />;
    const product = async () =>{
      DashServices.productsRequest()
        .then(response => {
          if (response.data.status === 200) {
            setProducts(response.data.body)
          }
      })
      .catch(error => {
          alert(JSON.stringify(error.response))
      })
    }


    useEffect(()=>{
      product()
    },[])
    
    return (
      <TouchableWithoutFeedback onPress={() => setIsActive(false)}>
        <SafeAreaView style={styles.vwDashboard}>
        <Nav isActive={isActive} setIsActive={setIsActive}/>
        <ScrollView>
          <View style={styles.vwPrincipal}>
            <View style={styles.vwCommon}>
              <ActiveNav setIsActive={setIsActive}/>
              <View style={styles.vwSearcher}>
                <TextInput
                  style={styles.txtSearcher}
                  placeholder="I am looking for..."
                />
                <CartShopping size={30} color="black"/>
              </View>
            </View>
            <View style={styles.vwCommon}>
              <Text>Categorias</Text>
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
              <Text>Tipos</Text>
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
            </View>
            <View style={styles.vwCommon}>
              <Text>Algo mas</Text>
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
    height:'100%'
  },
  vwPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  vwCommon: {
    width:'90%',
    minHeight:150,
    marginTop:30,
    padding:6,
    backgroundColor:stylesG.primaryColor,
    borderRadius: 20,
  },
  vwSearcher:{
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtSearcher:{
    minWidth:'85%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  vwCategories:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ejemplo:{
    width:30,
    height:30,
    backgroundColor:'blue',
  }
});
export default Dashboard;