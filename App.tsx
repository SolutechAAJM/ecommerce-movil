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
import { UserIcon, CircleUser, Lock } from './Icons';


function App(): React.JSX.Element {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.vwLogin}>
          <View style={stylesAuth.vwDecoration}>
            <View style={styles.vwIconLogin}>
              <CircleUser size={90} color="black" />
            </View>
            <View style={stylesAuth.vwForm}>
                <View style={stylesAuth.vwInputLoginSignUp}>
                  <View style={stylesAuth.vwIconsLoginSignUp}>
                    <UserIcon size={20} color='black' />
                  </View>
                  <TextInput 
                  style={stylesAuth.txtInputLoginSignUp}
                  placeholder="Login"
                  placeholderTextColor={stylesAuth.txtClrPlaceholder}
                  />
                </View>
                <View style={stylesAuth.vwInputLoginSignUp}>
                  <View style={stylesAuth.vwIconsLoginSignUp}>
                    <Lock size={20} color='black' />
                  </View>
                  <TextInput 
                  style={stylesAuth.txtInputLoginSignUp}
                  placeholder="Password"
                  placeholderTextColor={stylesAuth.txtClrPlaceholder}
                  />
                </View>
              <View style={stylesAuth.vwBtnLoginSignUp}>
                <TouchableOpacity style={stylesAuth.oTLoginSignUp}>
                  <Text style={stylesAuth.txtBtnLoginSignUp}>Log in</Text>
                </TouchableOpacity>
                <Text>Forgot your account?</Text>
              </View>
              <View style={stylesAuth.vwNavLoginSignUp}>
                <TouchableOpacity>
                  <Text style={stylesAuth.txtNavLoginSignUp}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={stylesAuth.txtNavLoginSignUp}>Login</Text>
                </TouchableOpacity>
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
    top:80,
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
  ejemplo:{
    width:30,
    height:30,
    backgroundColor:'blue',
  }
});

export default App;