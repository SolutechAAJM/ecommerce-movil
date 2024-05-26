import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import stylesG from '../../../../stylesG';

interface Category {
  id: number;
  name: string;
  urlimage: string;
}

interface CategoryProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryProps> = ({ category }) => {
  return (
    <View style={styles.containerCategory}>
      <Image source={{ uri: category.urlimage }} style={styles.imgPicture} />
      <Text>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCategory: {
    minHeight: 100,
    margin: 5,
    padding: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: stylesG.secundaryColor,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  imgPicture: {
    width: '90%',
    height: 65,
    borderRadius: 0,
    resizeMode: 'cover',
  },
});

export default CategoryItem;
