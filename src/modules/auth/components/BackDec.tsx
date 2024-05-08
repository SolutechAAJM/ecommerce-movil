import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import stylesG from '../../../../stylesG';

function BackDec(): React.JSX.Element {
  
  return (
          <View style={styles.vwDecoration} />
  );
}

const styles = StyleSheet.create({
  vwDecoration:{
    position:'absolute',
    width:'80%',
    height:'80%',
    backgroundColor:stylesG.primaryColor,
    borderTopLeftRadius:50,
    borderBottomRightRadius:50,
  }
});

export default BackDec;