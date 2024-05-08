import React from 'react';
import {
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

function App(): React.JSX.Element {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.vwLogin}>
          <View style={stylesAuth.vwDecoration}>
            <View style={styles.vwIconLogin}>
              <View style={styles.ejemplo} />
            </View>
            <View style={styles.vwForm}>
                <View style={styles.vwInputLoginSignUp}>
                  <View style={styles.vwIconsLoginSignUp}>
                    <View style={styles.ejemplo} />
                  </View>
                  <TextInput 
                  style={styles.txtInputLoginSignUp}
                  placeholder="Login"
                  />
                </View>
                <View style={styles.vwInputLoginSignUp}>
                  <View style={styles.vwIconsLoginSignUp}>
                    <View style={styles.ejemplo} />
                  </View>
                  <TextInput 
                  style={styles.txtInputLoginSignUp}
                  placeholder="Password"
                  />
                </View>
              <View style={styles.vwBtnLoginSignUp}>
                <TouchableOpacity style={styles.oTLoginSignUp}>
                  <Text>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.oTLoginSignUp}>
                  <Text>Sign up</Text>
                </TouchableOpacity>
                <Text>Forgot your account?</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  vwLogin:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:800,
  },
  vwLoginSon:{
    width:'80%',
    height:'80%',
    alignItems:'center',
    justifyContent:'center',
    position:'relative',
  },
  vwIconLogin:{
    width:100,
    height:100,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:60,
    backgroundColor:'white',
    borderRadius:50,
    zIndex:2,
  },
  vwForm:{
    width:'90%',
    height:'60%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:stylesG.secundaryColor,
    borderRadius:50,
    gap:30,
    paddingTop:20,
  },
  vwInputLoginSignUp:{
    width:'80%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  vwIconsLoginSignUp:{
    width:'20%',
    height:40,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
  },
  txtInputLoginSignUp:{
    width:'80%',
    height:40,
    backgroundColor:'white',
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
  },
  vwBtnLoginSignUp:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    gap:15,
  },
  oTLoginSignUp:{
    width:'30%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:50,
  },
  ejemplo:{
    width:30,
    height:30,
    backgroundColor:'blue',
  }
});

export default App;