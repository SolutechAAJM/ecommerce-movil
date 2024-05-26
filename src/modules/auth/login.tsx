import React, { createContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import stylesG from '../../../stylesG';
import stylesAuth from './styles/stylesAuth';
import { CircleUser, User, Lock } from '../../../Icons';
import { authServices } from './utils/Request';
import { useNavigation } from '@react-navigation/native';
import { labels } from '../admin/labels';
import { setIsLoggedIn } from '../admin/IsLoggedIn';

function Login(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const login = async () =>{
    authServices.loginRequest({email,password})
      .then(response => {
        alert(JSON.stringify(response.data.message))
        if (response.data.status === 200) {
          setIsLoggedIn(true);
          navigation.navigate('Dashboard' as never);
        }
    })
    .catch(error => {
        alert(JSON.stringify(error.response))
    })
  }

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
                    <User size={20} color='black' />
                  </View>
                  <TextInput 
                  style={stylesAuth.txtInputLoginSignUp}
                  placeholder="Login"
                  placeholderTextColor={stylesAuth.txtClrPlaceholder}
                  id='emailInput'
                  onChangeText={text => setEmail(text)}
                  value={email}
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
                  id='passwordInput'
                  onChangeText={text => setPassword(text)}
                  value={password}
                  />
                </View>
              <View style={stylesAuth.vwBtnLoginSignUp}>
                <TouchableOpacity style={stylesAuth.oTLoginSignUp}
                onPress={login}
                >
                  <Text style={stylesAuth.txtBtnLoginSignUp}>{labels.login}</Text>
                </TouchableOpacity>
                {/* <Text>Forgot your account?</Text> */}
              </View>
              <View style={stylesAuth.vwNavLoginSignUp}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Signup' as never)}
                >
                  <Text style={stylesAuth.txtNavLoginSignUp}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[stylesAuth.txtNavLoginSignUp, stylesAuth.oTScreen]}>Login</Text>
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
  }
});

export default Login; 