import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { OrderServices } from './utils/Reques';
import { getStorageData } from '../common/localstorage';
import { SafeAreaView } from 'react-native-safe-area-context';


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
      <SafeAreaView>
        <Text>{orderInfo[1].product.name}</Text>
      </SafeAreaView>
    )
}

export default Orders