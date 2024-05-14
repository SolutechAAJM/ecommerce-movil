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

interface Category {
  id: number;
  name: string;
}

  
  const categories: Category[] = [
    { id: 1, name: 'Categoría 1' },
    { id: 2, name: 'Categoría 2' },
    { id: 3, name: 'Categoría 3' },
    { id: 4, name: 'Categoría 3' },
    { id: 5, name: 'Categoría 1' },
    { id: 6, name: 'Categoría 2' },
    // Agrega más categorías según sea necesario
  ];
  
  const renderItem = ({ item }: { item: Category }) => <CategoryItem category={item} />;

  function Dashboard({ route }: { route: any }): React.JSX.Element {
    const [isActive,setIsActive]=useState(false)
    useEffect(()=>{
      setIsActive(route)
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
            <Products />
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