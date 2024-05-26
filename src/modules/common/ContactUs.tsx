import React, { useState } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Nav from '../../components/Nav';
import ActiveNav from '../../components/ActiveNav';
import stylesG from '../../../stylesG';

export function ContactUs(): React.JSX.Element {
  const [isActive,setIsActive]=useState(false)

  const handleWhatsAppPress = () => {
    const url = 'whatsapp://send?phone=3218312687';
    Linking.openURL(url).catch(() => {
      alert('Make sure WhatsApp is installed on your device');
    });
  };
  
  const handleEmailPress = () => {
    const url = 'mailto:estebando132@gmail.com';
    Linking.openURL(url).catch(() => {
      alert('Unable to open email client');
    });
  };  

    return (
      <TouchableWithoutFeedback onPress={() => setIsActive(false)}>
        <SafeAreaView style={styles.vwContactUs}>
        <Nav isActive={isActive} setIsActive={setIsActive}/>
          <ScrollView>
            <View style={styles.vwPrincipal}>
              <ActiveNav setIsActive={setIsActive}/>
              <View style={styles.vwContent}>
                <TouchableOpacity style={styles.tOHandlePress}>
                  <Text onPress={handleWhatsAppPress}>Contactanos por Whatsapp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tOHandlePress}>
                  <Text onPress={handleEmailPress}>Contactanos por email</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    )
  }

  const styles = StyleSheet.create({
    vwContactUs:{
      height:'100%'
    },
    vwPrincipal:{
      marginTop:30,
    },
    vwContent:{
      justifyContent:'center',
      alignItems:'center',
      gap:30,
    },
    tOHandlePress:{
      backgroundColor:stylesG.primaryColor,
      width:'80%',
      justifyContent:'center',
      alignItems:'center',
      padding:20,
      borderRadius:20,
    }
  })

export default ContactUs