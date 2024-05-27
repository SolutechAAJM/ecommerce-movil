import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { getStorageData } from '../common/localstorage';
import { ShopServices } from './request';

interface ImageI {
  id: number;
  url: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  images?: ImageI[];
}

interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  idcart:number;
  images?: ImageI[];
}

const ShoppingCart: React.FC = () => {
  const [load, setLoad] = useState(false);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!load) {
        let idUser: any = await getStorageData("iduser");
        idUser = parseInt(idUser, 10);

        ShopServices.getProductsByUser(idUser)
          .then((response) => {
            if (response.data.status === 200) {
              const products = response.data.body.items.map((item: any) => ({
                id: item.product.id,
                name: item.product.name,
                price: item.product.price,
                quantity: item.quantity,
                idcart: item.id,
                images: [],
              }));
              setCartProducts(products);
            } else {
              alert("Error obteniendo los productos");
            }
            setLoad(true);
          })
          .catch(error => {
            alert("Error obteniendo los productos  " + error);
          });
      }
    };

    fetchData();
  }, [load]);

  const increaseQuantity = (productId: number, idcart:number) => {
    let data = {
      'param': 'sumar',
      'id': idcart
    }
    ShopServices.modify(data)
      .then((response) => {
        if (response.data.status != 201) {
          alert("Error en el servidor")
          return
        }
      })
      .catch(error => {
        alert("Error en el servidor")
        return
      })

    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decreaseQuantity = (productId: number, idcart: number) => {

    let data = {
      'param': 'res',
      'id': idcart
    }
    ShopServices.modify(data)
      .then((response) => {
        if (response.data.status != 201) {
          alert("Error en el servidor")
          return
        }
      })
      .catch(error => {
        alert("Error en el servidor")
        return
      })

    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  

  const removeProduct = (productId: number, idcart:number) => {
    ShopServices.deleteCart({"id": idcart})
    .then((response)=>{
      if(response.data.status != 200){
        alert("Ocurrió un error al eliminar el producto");
      }
    })
    .catch(error=>{
      alert("Ocurrió un error al eliminar el producto");
    })
    
    setCartProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  const getTotalPrice = () => {
    return cartProducts.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const renderProductItem = ({ item }: { item: CartProduct }) => (
  console.log(item),

    <View style={styles.productItem}>
      
      <Image source={{ uri: item.images?.[0]?.url }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id, item.idcart)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.id, item.idcart)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Button title="Eliminar" onPress={() => removeProduct(item.id, item.idcart)} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tu Carrito</Text>
      <FlatList
        data={cartProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Precio Total: ${getTotalPrice()}</Text>
      </View>
      <TouchableOpacity onPress={()=>{}} style={styles.totalContainer}>
          <Text style={styles.quantityButtonText}>Finalizar Compra</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productList: {
    alignItems: 'center',
  },
  productItem: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    width: '100%',
  },
  productImage: {
    width: 300,
    height: 150,
    borderRadius: 8,
  },
  productName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  totalContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShoppingCart;
