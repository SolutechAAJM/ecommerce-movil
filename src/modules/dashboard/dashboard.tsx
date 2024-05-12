import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import stylesG from '../../../stylesG';
import { CartShopping, Bars } from '../../../Icons';
import { FlatList } from 'react-native-gesture-handler';
import CategoryItem from './components/Category';

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

  function Dashboard(): React.JSX.Element {

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.conteinerPrincipal}>
          <View style={styles.conteinerCommon}>
            <Bars size={30} color="black" />
            <View style={styles.conteinerSearcher}>
              <TextInput
                style={styles.searcher}
                placeholder="I am looking for..."
              />
              <CartShopping size={30} color="black"/>
            </View>
          </View>
          <View style={styles.conteinerCommon}>
            <Text>Categorias</Text>
            <View style={styles.conteinerCategories}>
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
            <View style={styles.conteinerCategories}>
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
          <View style={styles.conteinerCommon}>
            <Text>Algo mas</Text>
          </View>
          </View>
      </ScrollView>
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
export default Dashboard;