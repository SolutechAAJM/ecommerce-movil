import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import stylesG from '../../../../stylesG';

interface Category {
    id: number;
    name: string;
  }
  
  interface CategoryProps {
    category: Category;
  }
  
  const CategoryItem: React.FC<CategoryProps> = ({ category }) => {
  return (
    <View style={styles.conteinerCategory}>
      <View style={styles.ejemplo} />
      <Text>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    conteinerCategory:{
        minHeight:90,
        margin:5,
        padding:2,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor:stylesG.secundaryColor,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
      },
      ejemplo:{
        width:30,
        height:30,
        backgroundColor:'blue',
      }
  });
  
  export default CategoryItem;