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
            href: '(student)/(tabs)/Home',
          }}
        />

        <Tabs.Screen
          name="Chat"
          options={{
            href: {
              pathname: '(student)/(tabs)/Chat',
            },
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            href: {
              pathname: '(student)/(tabs)/Profile',
            },
          }}
        />
      </Tabs>
    </NativeBaseProvider>
  );
};

export default _layout;
