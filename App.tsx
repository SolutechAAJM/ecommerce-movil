import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/modules/auth/Signup';
import Dashboard from './src/modules/dashboard/dashboard';
import Product from './src/modules/products/Product';
import Login from './src/modules/auth/Login';
import ProductsBy from './src/modules/dashboard/ProductBy';
import CategoryProducts from './src/modules/dashboard/CategoryProducts';
import ContactUs from './src/modules/common/ContactUs';
import ShoppingCart from './src/modules/shoppingcart/shoppingcart';
import Orders from './src/modules/ordes/Orders';
import OrderFinally from './src/modules/ordes/orderFinally';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  Product: {id: number};
  ContactUs: undefined;
  Order:undefined;
  ProductBy: { name: string; products: any[] };
  CategoryProducts: { method: any; id: number, name: string };
  ShoppingCart: undefined;
  OrderFinally: {products:any}
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
        <Stack.Screen name="ProductBy" component={ProductsBy} options={{ headerShown: true }} />
        <Stack.Screen name="CategoryProducts" component={CategoryProducts} options={{ headerShown: false }} />
        <Stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={Orders} options={{ headerShown: false }} />
        <Stack.Screen name="OrderFinally" component={OrderFinally} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;
