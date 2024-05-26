import React, { useState } from 'react';
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
import { User, Lock, Envelope } from '../../../Icons'; 
import { authServices } from './utils/Request';
import { useNavigation } from '@react-navigation/native';

function SignUp(): React.JSX.Element {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const address=""
  const phone=""
  const isActive=true
  const creditPoints=0
  const role='user'
  const signup = async () =>{
    const currentDate = new Date();
    const createdAt = currentDate.toISOString();
    authServices.SignUpRequest({fullName,email,password,createdAt, address, phone, isActive, creditPoints, role})
      .then(response => {
        alert(JSON.stringify(response.data.message))
    })
    .catch(error => {
        alert(JSON.stringify(error.response))
    })
  }
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.vwSignUp}>
          <View style={stylesAuth.vwDecoration}>
            <Text style={styles.txtSignUp}>Sign up</Text>
            <View style={stylesAuth.vwForm}>
                <View style={stylesAuth.vwInputLoginSignUp}>
                  <View style={stylesAuth.vwIconsLoginSignUp}>
                    <User size={20} color="black" />
                  </View>
                  <TextInput 
                  style={stylesAuth.txtInputLoginSignUp}
                  placeholder="Name"
                  placeholderTextColor={stylesAuth.txtClrPlaceholder}
                  id='nameInput'
                  onChangeText={text => setFullName(text)}
                  value={fullName}
                  />
                </View>
                <View style={stylesAuth.vwInputLoginSignUp}>
                  <View style={stylesAuth.vwIconsLoginSignUp}>
                    <Envelope size={20} color="black" />
                  </View>
                  <TextInput 
                  style={stylesAuth.txtInputLoginSignUp}
                  placeholder="Email"
                  placeholderTextColor={stylesAuth.txtClrPlaceholder}
                  id='emailInput'
                  onChangeText={text => setEmail(text)}
                  value={email}
                  />
                </View>
                <View style={stylesAuth.vwInputLoginSignUp}>
                  <View style={stylesAuth.vwIconsLoginSignUp}>
                    <Lock size={20} color="black"/>
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
                onPress={signup}
                >
                  <Text style={stylesAuth.txtBtnLoginSignUp}>Sign up</Text>
                </TouchableOpacity>
              </View>
              <View style={stylesAuth.vwNavLoginSignUp}>
                <TouchableOpacity>
                  <Text style={[stylesAuth.txtNavLoginSignUp, stylesAuth.oTScreen]}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
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
  vwSignUp:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:800,
  },
  txtSignUp:{
    width:'90%',
    height:50,
    backgroundColor:stylesG.secundaryColor,
    textAlignVertical:'center',
    textAlign:'center',
    borderRadius:50,
    fontSize:30,
    color:'white',
  }
});

export default SignUp;