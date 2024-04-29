import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import stylesG from './stylesG';

function App(): React.JSX.Element {
  
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
      <View style={styles.conteinerButtons}>
        <View style={styles.ejemplo} />
        <Text>Home</Text>
      </View>
      <View style={styles.conteinerButtons}>
        <View style={styles.ejemplo} />
        <Text>Category</Text>
      </View>
      <View style={styles.conteinerButtons}>
        <View style={styles.ejemplo} />
        <Text>Order</Text>
      </View>
      <View style={styles.conteinerButtons}>
        <View style={styles.ejemplo} />
        <Text>Setting</Text>
      </View>
      <View style={styles.conteinerButtons}>
        <View style={styles.ejemplo} />
        <Text>Contact Us</Text>
      </View>
      <View style={styles.conteinerButtons}>
        <View style={styles.ejemplo} />
        <Text>Exit</Text>
      </View>
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

export default App;