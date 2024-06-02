import React from 'react';
import { NativeBaseProvider, theme } from 'native-base';
import { Slot, Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const _layout = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="Home"
          options={{
            href: '/Home',
          }}
        />

        <Tabs.Screen
          name="Chat"
          options={{
            href: {
              pathname: '/Chat',
            },
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            href: {
              pathname: '/Profile',
            },
          }}
        />
      </Tabs>
    </NativeBaseProvider>
  );
};

export default _layout;
