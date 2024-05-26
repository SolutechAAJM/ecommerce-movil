import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import stylesG from '../../stylesG';
import { BoxCheck, CategoryIcon, CircleUser, Exit, Gear, HouseChimney, User } from '../../Icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { getIsLoggedIn, setIsLoggedIn } from '../modules/admin/IsLoggedIn';

interface NavProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Nav({ isActive }: NavProps): React.JSX.Element {
  const navigation = useNavigation();
  
  return (
        <SafeAreaView style={[styles.vwnav, isActive && styles.activeNav]}>
          <View style={styles.conteinerInfo}>
            <User size={50} color='black'/> 
            {getIsLoggedIn() ? 
            <View>
            <Text>Lolita Martinez</Text>
            <Text>Lolita@gmail.com</Text>
            <Text>Edit Profile</Text>
          </View> : 
            <View>
              <TouchableOpacity 
            style={styles.conteinerButtons}
            onPress={() => navigation.navigate('Login' as never)}
            >
             <Text>Login</Text>
           </TouchableOpacity>
            </View>
           }
            
          </View>
          <TouchableOpacity 
           style={styles.conteinerButtons}
           onPress={() => navigation.navigate('Dashboard' as never)}
           >
            <HouseChimney size={30} color="black"/>
            <Text>Home</Text>
          </TouchableOpacity>
          <View style={styles.conteinerButtons}>
            <CategoryIcon size={30} color="black"/>
            <Text>Category</Text>
          </View>
          <View style={styles.conteinerButtons}>
            <BoxCheck size={30} color="black"/>
            <Text>Order</Text>
          </View>
          {/* <View style={styles.conteinerButtons}>
            <Gear size={30} color="black"/>
            <Text>Setting</Text>
          </View> */}
          <TouchableOpacity 
          style={styles.conteinerButtons}
          onPress={() => navigation.navigate('ContactUs' as never)}>
            <CircleUser size={30} color="black" />
            <Text>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.conteinerButtons}
          onPress={()=>setIsLoggedIn(false)} 
          >
          <Exit size={30} color="black" />
            <Text>Exit</Text>
          </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  prueba:{
    width:'65%'
  },
  activeNav:{
    left:1,
  },
  vwnav:{
    height:'100%',
    width:'65%',
    backgroundColor:stylesG.terceryColor,
    borderTopRightRadius: 20,
    zIndex:2,
    position:'absolute',
    left:-500,
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
  }
});

export default Nav;