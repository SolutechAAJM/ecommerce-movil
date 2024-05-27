import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { OrderServices } from './utils/Reques';
import { getStorageData } from '../common/localstorage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';


interface OrderDetails {
    id: number;
    quantityProduct: number;
    unitPrice: number;
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        characteristics: string;
        isOffer: boolean;
        dateCreation: string;
        lastModify: string;
    };
    order: {
        id: number;
        orderStatus: string;
        orderAddress: string;
        dateOrder: string;
    };
} function Orders():  React.JSX.Element {
    const [loading, setLoading] = useState(true);
    const [orderInfo, setOrderInfo] = useState<OrderDetails[]>([
        {
            id: 0,
            quantityProduct: 0,
            unitPrice: 0,
            product: {
                id: 0,
                name: "",
                description: "",
                price: 0,
                stock: 0,
                characteristics: "",
                isOffer: false,
                dateCreation: "",
                lastModify: ""
            },
            order: {
                id: 3,
                orderStatus: "",
                orderAddress: "",
                dateOrder: ""
            }
        },
    ]);
    

    useEffect(() => {
        const fetchOrder = async () => {
          try {
            const id = await getId();
            const response = await OrderServices.getOrder(id);
            if (response.status === 201) {
              setOrderInfo(response.data.body[0].orderDetails);
            }
          } catch (error) {
            console.log('Failed to load product information');
          } finally {
            setLoading(false);
          }
        };
        fetchOrder();
      }, []);
    const  getId = async () => {
        const id:any =await getStorageData('iduser')
        if (id !== undefined && id !== null) {
            return id.toString();
        } else {
            throw new Error('ID de usuario no encontrado en el almacenamiento local');
        }
    }

    if (loading) {
        return (
          <SafeAreaView>
            <Text>cargando</Text>
          </SafeAreaView>
        );
    }
    return (
      <SafeAreaView style={styles.vwOrders}>
        <ScrollView>
        {orderInfo.map((order, index) => (
                <View key={index} style={styles.vwOrder}>
                    <View style={styles.vwIdDateOrder}>
                        <Text>Id de la orden:{order.id}</Text>
                        <Text>{order.order.dateOrder}</Text>
                    </View>
                    <View style={styles.vwQuantityPrice}>
                        <Text>Cantidad:{order.quantityProduct}</Text>
                        <Text>Precio:{order.unitPrice}</Text> 
                    </View>
                    <Text>Producto:{order.product.name}</Text>
                    <Text>{order.order.orderStatus}</Text>
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    vwOrders:{
        height:'100%'
    },
    vwOrder:{
        margin:20,
        padding:10,
        borderColor:'black',
        borderWidth:2,
        borderRadius:20,
    },
    vwIdDateOrder:{
        width:'100%',
        height:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    vwQuantityPrice:{
        width:'80%',
        height:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
})

export default Orders