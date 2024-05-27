import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import stylesG from '../../../../stylesG';

interface img{
    url: string
}
interface ProductProps {
    id: number;
    name: string;
    description:string;
    price: number,
    stock: number,
    characteristics: object,
    images:img[],
  }

function Products({ props }: { props: ProductProps }): React.JSX.Element {
    const url=props.images[0].url;
    return (
        <View style={style.vwProduct}>
        <Image source={{ uri:url}} style={style.imgPicture}></Image>
        <Text style={style.txtTitle}>{props.name}</Text>
        <View style={style.vwPriceCart}>
            <Text style={style.txtPrice}>${props.price}</Text>
            {/* <TouchableOpacity>
                <Text style={style.txtCart}>+</Text>
            </TouchableOpacity> */}
        </View>
      </View>
    )
}

const style = StyleSheet.create({
    vwProduct:{
        width:'100%',
        marginTop:5,
        marginBottom:5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:5,
    },
    imgPicture:{
        width:'100%',
        height:180,
        borderRadius:20,
    },
    txtTitle:{
        fontSize:30,
        color:'black',
        textAlign:'center',
    },
    vwPriceCart:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    txtPrice:{
        fontSize:24,
        color:'black'
    },
    tOCart:{

    },
    txtCart:{
        fontSize:40,
    }
})
export default Products