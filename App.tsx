import React from 'react';
import Login from './src/modules/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/modules/auth/SignUp';
import Dashboard from './src/modules/dashboard/Dashboard';


const Stack = createStackNavigator();

const App: React.FC = () => {

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);
}


export default App;