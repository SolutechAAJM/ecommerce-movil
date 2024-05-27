import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { OrderServices } from './utils/Reques';
import { getStorageData } from '../common/localstorage';

type OrderFinallyRouteProp = RouteProp<RootStackParamList, 'OrderFinally'>;

const OrderFinally: React.FC = () => {
  const route = useRoute<OrderFinallyRouteProp>();
  const { products } = route.params;

  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const totalAmount = products.reduce((total: number, product: any) => total + product.price * product.quantity, 0);

  const handleOrder = async () => {
    if (!address || !phone) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }


    let idUser: any = await getStorageData("iduser");
    idUser = parseInt(idUser, 10);

    const orderProducts = products.map((product: any) => ({
      productId: product.id,
      quantityProduct: product.quantity,
      unitPrice: product.price,
    }));

    const data = {
      "idUser": idUser,
      "orderStatus": "open",
      "dateOrder": new Date(),
      "orderAddress": address,
      "products": orderProducts,
    };

    OrderServices.createOrder(data)
      .then((response) => {
        console.log(response)
        if (response.data.status !== 201) {
          Alert.alert("Error", "Ocurrió un error al generar la orden");
          return;
        }
        else {
          Alert.alert("Éxito", "Orden realizada con éxito");

        }
      })
      .catch(error => {
        Alert.alert("Error", "Ocurrió un error al crear la orden.");
      })

  };

  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nombre</Text>
        <Text style={styles.headerText}>Cantidad</Text>
        <Text style={styles.headerText}>Precio</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productText}>{item.name}</Text>
            <Text style={styles.productText}>{item.quantity}</Text>
            <Text style={styles.productText}>${item.price.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={address}
        onChangeText={text=> setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={phone}
        onChangeText={text=>setPhone(text)}
        keyboardType="phone-pad"
      /> */}
      <Button title="Ordenar" onPress={handleOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  productText: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default OrderFinally;
