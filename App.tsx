import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import stylesG from './stylesG';
import stylesAuth from './src/modules/auth/styles/stylesAuth';
import CategoryItem  from './src/modules/dashboard/components/Category';
import { Bars, BoxCheck, CartShopping, CategoryIcon, CircleUser, Exit, Gear, Heart, HouseChimney, ShareNodes } from './Icons';
import Login from './src/modules/auth/Login';

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

const renderCategory = ({ item }: { item: Category }) => <CategoryItem category={item} />;

const App: React.FC = () => {

return (
  <SafeAreaView>
   <Login></Login>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
conteinerPrincipal: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
},
conteinerCommon: {
  width:'90%',
  minHeight:150,
  marginTop:30,
  padding:6,
  backgroundColor:stylesG.primaryColor,
  borderRadius: 20,
},
conteinerSearcher:{
  flex:1,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
},
searcher:{
  minWidth:'85%',
  backgroundColor: 'white',
  borderRadius: 20,
},
conteinerCategories:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
},
conteinerCategory:{
  minHeight:90,
  margin:5,
  padding:2,
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor:stylesG.secundaryColor,
  borderRadius: 20,
  borderColor: 'black',
  borderWidth: 1,
},
ejemplo:{
  width:30,
  height:30,
  backgroundColor:'blue',
}
});

export default App;