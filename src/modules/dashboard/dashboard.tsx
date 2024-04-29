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

function Dashboard(): React.JSX.Element {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.conteinerPrincipal}>
          <View style={styles.conteinerCommon}>
            <View style={styles.ejemplo} />
            <View style={styles.conteinerSearcher}>
              <TextInput
                style={styles.searcher}
                placeholder="I am looking for..."
              />
              <View style={styles.ejemplo} />
            </View>
          </View>
          <View style={styles.conteinerCommon}>
            <Text>Categorias</Text>
            <View style={styles.conteinerCategories}>
              <View style={styles.conteinerCategory}>
                <View style={styles.ejemplo} />
                <Text>Camisas</Text>
              </View>
              <View style={styles.conteinerCategory}>
                <View style={styles.ejemplo} />
                <Text>Blusas</Text>
              </View>
              <View style={styles.conteinerCategory}>
                <View style={styles.ejemplo} />
                <Text>Zapatos</Text>
              </View>
              <View style={styles.conteinerCategory}>
                <View style={styles.ejemplo} />
                <Text>Trajes</Text>
              </View>
            </View>
            <View style={styles.conteinerCategories}>
            <View style={styles.conteinerCategory}>
                <View style={styles.ejemplo} />
                <Text>Vestido</Text>
              </View>
              <View style={styles.conteinerCategory}>
                <View style={styles.ejemplo} />
                <Text>Deportiva</Text>
              </View>
              <View style={styles.conteinerCategory}>
                <View style={styles.ejemplo} />
                <Text>Toallas</Text>
              </View>
              <View style={styles.conteinerCategory}>
                <View style={styles.ejemplo} />
                <Text>Pantalones</Text>
              </View>
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