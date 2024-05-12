import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import stylesG from '../../stylesG';
import { BoxCheck, CategoryIcon, CircleUser, Exit, Gear, HouseChimney } from '../../Icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Nav(): React.JSX.Element {
  
  return (
    <SafeAreaView style={styles.nav}>
      <View style={styles.conteinerInfo}>
      <View style={styles.ejemplo} />
        <View>
          <Text>Lolita Martinez</Text>
          <Text>Lolita@gmail.com</Text>
          <Text>Edit Profile</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.conteinerButtons}>
        <HouseChimney size={30} color="black"/>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conteinerButtons}>
        <CategoryIcon size={30} color="black"/>
        <Text>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conteinerButtons}>
        <BoxCheck size={30} color="black"/>
        <Text>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conteinerButtons}>
        <Gear size={30} color="black"/>
        <Text>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conteinerButtons}>
        <CircleUser size={30} color="black" />
        <Text>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conteinerButtons}>
        <Exit size={30} color="black" />
        <Text>Exit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nav:{
    flex:1,
    width:'65%',
    backgroundColor:stylesG.terceryColor,
    borderTopRightRadius: 20,
  },
  conteinerInfo: {
    padding:40,
    marginBottom:20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    backgroundColor: stylesG.secundaryColor,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  conteinerButtons:{
    marginTop:20,
    paddingLeft:40,
    alignItems: 'center',
    flexDirection: 'row',
    gap:10
  },
  ejemplo:{
    width:30,
    height:30,
    backgroundColor:'blue',
  }
});

export default Nav;