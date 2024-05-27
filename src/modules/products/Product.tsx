import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import stylesG from '../../../stylesG';
import { ArrowLeft, ArrowRight, Heart, ShareNodes } from '../../../Icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductServices } from './utils/Request';
import { Image } from 'react-native';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  characteristics: string;
  isOffer: boolean;
  dateCreation: string;
  lastModify: string;
  images: { id: number; url: string; productId: number }[];
}
interface ProductsRouteParams {
  id: number,
}

type ProductsRouteProp = RouteProp<{ ProductBy: ProductsRouteParams }, 'ProductBy'>;

function Product(): React.JSX.Element {
  const route = useRoute<ProductsRouteProp>();
  const { id } = route.params;
  const [loading, setLoading] = useState(true);
  const [countImg, setCountImg] = useState(0)
  const [productInfo, setProductInfo] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
    characteristics: '',
    isOffer: false,
    dateCreation: '',
    lastModify: '',
    images: [],
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await ProductServices.getProduct(id);
        if (response.status === 200) {
          setProductInfo(response.data.body);
        }
      } catch (error) {
        console.log('Failed to load product information');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const increaseCount = () => {
    if (countImg < productInfo.images.length - 1) {
      setCountImg(countImg + 1)
    }
  };
  const reduceCount = () => {
    if (countImg > 0) {
    setCountImg(countImg - 1)
    }
  };
  if (loading) {
    return (
      <SafeAreaView>
        <Text>cargando</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.product}>
        <ScrollView>
        <View style={styles.vwDecoration} />
          <View style={styles.content}>
            <View style={styles.vwImgProduct}>
              <View style={styles.vwImgBtn}>
                <Image source={{ uri:productInfo.images[countImg].url}} style={styles.imgPicture}/>
                <View style={styles.vwBtnLR}>
                  <TouchableOpacity onPress={reduceCount}>
                    <ArrowLeft size={35} color='black'/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={increaseCount}>
                    <ArrowRight size={35} color='black'/>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.txtQuantity}>{countImg+1}/{productInfo.images.length}</Text>
            </View>
            <View style={styles.vwPriceLikeShare}>
              <Text style={styles.txtPriceTitle}>{productInfo?.price}</Text>
              <View style={styles.vwLikeShare}>
                <TouchableOpacity style={styles.tOLikeShare}>
                  <ShareNodes size={35} color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tOLikeShare} >
                  <Heart size={35} color='white' />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.vwColor}>
              <Text style={styles.txtPriceTitle}>{productInfo?.name}</Text>
              {/* <View style={styles.vwImgColor}>
                <TouchableOpacity style={styles.tOImgColor}>
                  <View style={styles.ejemplo} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tOImgColor}>
                  <View style={styles.ejemplo} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tOImgColor}>
                  <View style={styles.ejemplo} />
                </TouchableOpacity>
              </View> */}
            </View>
            <View style={styles.vwSize}>
              <Text>Descripcion</Text>
              <Text>{productInfo?.description}</Text>
            </View>
            <TouchableOpacity style={styles.tOBuy}>
              <Text>Añadir al carrito</Text>
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
  imgPicture:{
    width:'100%',
    height:180,
    borderRadius:20,
  },
  vwBtnLR:{
    flexDirection:'row',
    justifyContent: 'center', 
    alignItems:'center',
    gap:50,
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
  tOLikeShare:{
    width:50,
    height:50,
    backgroundColor:stylesG.secundaryColor,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
  },
  txtPriceTitle:{
    fontSize:24,
    color:'black',
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
  tOImgColor:{
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
    gap:20,
  },
  vwSizes:{
    width:'100%',
    flexDirection:'row',
    gap:15,
  },
  tOSize:{
    width:50,
    height:40,
    backgroundColor:stylesG.secundaryColor,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor: 'black',
    borderWidth: 1,
  },
  tOBuy:{
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