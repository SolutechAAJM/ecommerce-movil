import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ProductProps {
    id: number;
    name: string;
    description:string;
    price: number,
    stock: number,
    characteristics: object,
    images:Array<object>,
  }

function Products({ props }: { props: ProductProps }): React.JSX.Element {
    const url="https://drive.google.com/uc?export=view&id=1SVL2FaTk0SdUhjoF39GC3yWysp5Az99L";
    return (
        <View style={style.vwProduct}>
        <Image source={{ uri:url}} style={style.imgPicture}></Image>
        <View style={style.vwInfo}>
            <Text style={style.txtTitle}>{props.name}</Text>
            <Text style={style.txtInfo}>{props.description}</Text>
        </View>
      </View>
    )
}

const style = StyleSheet.create({
    vwProduct:{
        marginTop:5,
        marginBottom:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:5,
    },
    imgPicture:{
        width:'60%',
        height:200,
        borderRadius:20,
    },
    vwInfo:{
        width:'40%',
        gap:10,
    },
    txtTitle:{
        fontSize:22,
        color:'red',
        textAlign:'center',
    },
    txtInfo:{
        textAlign:'center'

    },
})
export default Products