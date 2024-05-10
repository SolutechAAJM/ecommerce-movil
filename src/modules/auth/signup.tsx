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
import stylesG from '../../../stylesG';
import stylesAuth from './styles/stylesAuth';
import { User, Lock, Envelope } from '../../../Icons'; 

function SignUp(): React.JSX.Element {
  
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
                  />
                </View>
              <View style={stylesAuth.vwBtnLoginSignUp}>
                <TouchableOpacity style={stylesAuth.oTLoginSignUp}>
                  <Text style={stylesAuth.txtBtnLoginSignUp}>Sign up</Text>
                </TouchableOpacity>
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