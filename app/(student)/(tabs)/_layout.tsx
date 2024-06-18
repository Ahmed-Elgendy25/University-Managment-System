import React from 'react';
import { Box, NativeBaseProvider, theme } from 'native-base';
import { Slot, Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const _layout = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#F19A1A',
          tabBarInactiveTintColor: '#ddd',
          headerStyle: { backgroundColor: '#F19A1A' },
          tabBarStyle: { height:60 }, // Add margin top to all tabs
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            href: '(student)/(tabs)/Home',
            headerShown: false,
            title: '',

            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline" size={32} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Chat"
          options={{
            href: {
              pathname: '(student)/(tabs)/Chat',
            },
            title: '',
            headerShown: false,

            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbox-outline" size={32} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            href: {
              pathname: '(student)/(tabs)/Profile',
            },
            title: '',
            headerShown: false,

            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-o" size={32} color={color} />
            ),
          }}
        />
      </Tabs>
    </NativeBaseProvider>
  );
};

export default _layout;
