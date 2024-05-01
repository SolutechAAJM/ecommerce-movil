import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import stylesG from '../../../stylesG';

function Product(): React.JSX.Element {
  
  return (
    <SafeAreaView style={styles.product}>
      <ScrollView>
      <View style={styles.vwDecoration} />
        <View style={styles.content}>
          <View style={styles.vwImgProduct}>
            <View style={styles.vwImgBtn}>
              <View style={styles.ejemplo} />
              <View style={styles.vwBtnLR}>
                <TouchableOpacity>
                  <View style={styles.ejemplo} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.ejemplo} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.txtQuantity}>1/7</Text>
          </View>
          <View style={styles.vwPriceLikeShare}>
            <Text>$100</Text>
            <View style={styles.vwLikeShare}>
              <TouchableOpacity style={styles.TOLikeShare}>
                <View style={styles.ejemplo} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TOLikeShare}>
                <View style={styles.ejemplo} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.vwColor}>
            <Text>Zapato azul</Text>
            <View style={styles.vwImgColor}>
              <TouchableOpacity style={styles.TOImgColor}>
                <View style={styles.ejemplo} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TOImgColor}>
                <View style={styles.ejemplo} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TOImgColor}>
                <View style={styles.ejemplo} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.vwSize}>
            <Text>Select size</Text>
            <View style={styles.vwSizes}>
              <TouchableOpacity style={styles.TOSize}>
                <Text>35</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TOSize}>
                <Text>36</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TOSize}>
                <Text>37</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TOSize}>
                <Text>38</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TOSize}>
                <Text>39</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TOSize}>
                <Text>40</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.TOBuy}>
            <Text>Buy now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  product:{
    flex: 1,
    backgroundColor:stylesG.terceryColor,
  },
  content:{
    alignItems:'center',
    justifyContent:'center',
    gap:30,
  },
  vwDecoration:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width:'100%',
    height:200,
    backgroundColor:stylesG.primaryColor,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  vwImgProduct:{
    flexDirection:'row',
    justifyContent: 'center', 
    alignItems:'center',
    marginTop:30,
    padding:20,
    backgroundColor:stylesG.secundaryColor,
    width:'85%',
    minHeight:300,
    borderRadius:30,
  },
  vwImgBtn:{
    flexDirection:'column',
    justifyContent: 'center', 
    alignItems:'center',
    width:'80%',
    gap:10,
  },
  vwBtnLR:{
    flexDirection:'row',
    justifyContent: 'center', 
    alignItems:'center',
    gap:10,
  },
  txtQuantity:{
    position: 'absolute',
    right:30,
    bottom:30,
  },
  vwPriceLikeShare:{
    width:'80%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'flex-end',
  },
  vwLikeShare:{
    flexDirection:'row',
    gap:10,
  },
  TOLikeShare:{
    width:50,
    height:50,
    backgroundColor:stylesG.secundaryColor,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
  },
  vwColor:{
    width:'80%',
    gap:30,
  },
  vwImgColor:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    gap:30,
  },
  TOImgColor:{
    width:100,
    height:60,
    backgroundColor:stylesG.secundaryColor,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    borderColor: 'black',
    borderWidth: 1,
  },
  vwSize:{
    width:'80%',
    gap:30,
  },
  vwSizes:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    gap:15,
  },
  TOSize:{
    width:50,
    height:40,
    backgroundColor:stylesG.secundaryColor,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor: 'black',
    borderWidth: 1,
  },
  TOBuy:{
    width:100,
    height:50,
    backgroundColor:stylesG.primaryColor,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  ejemplo:{
    width:30,
    height:30,
    backgroundColor:'blue',
  }
});

export default Product;