import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';

type OrderFinallyRouteProp = RouteProp<RootStackParamList, 'OrderFinally'>;

const OrderFinally: React.FC = () => {
  const route = useRoute<OrderFinallyRouteProp>();
  const { products } = route.params;

  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const totalAmount = products.reduce((total:any, product:any) => total + product.price, 0);

  const handleOrder = () => {
    alert('Orden realizada con éxito');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>${item.price.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
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
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
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
