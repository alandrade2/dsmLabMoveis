import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './pages/welcome';
import Login from './pages/login';
import Favoritos from './pages/favorites';
import Register from './pages/register';
import Person from './pages/person';
import Perfil from './pages/perfil';
import Menu from './pages/menu';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="login" component={Login} options={{
          title: 'LOGIN',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#38a69c'
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="register" component={Register} options={{
          title: 'Cadastro de usuario',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#38a69c'
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="menu" component={Menu} options={{
          title: 'Menu de opções',
          headerLeft: null,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#38a69d'
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }

        }} />

        <Stack.Screen name="person" component={Person} options={{
          title: 'Personagens Rick and Morty',
          // headerLeft: null,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#38a69d'
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }

        }} />
        <Stack.Screen name="favorites" component={Favoritos} options={{
          title: 'Personagens favoritos',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#38a69d'
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }

        }} />
        <Stack.Screen name="perfil" component={Perfil} options={{
          title: 'Perfil do personagem',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#38a69d'
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }

        }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
