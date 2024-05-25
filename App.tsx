import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/modules/auth/signup';
import Dashboard from './src/modules/dashboard/dashboard';
import Product from './src/modules/products/Product';
import Login from './src/modules/auth/login';


const Stack = createStackNavigator();

const App: React.FC = () => {

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);
}


export default App;