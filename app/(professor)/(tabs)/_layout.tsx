import React from 'react';
import { NativeBaseProvider, theme } from 'native-base';
import { Slot, Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const _layout = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#F19A1A' },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            href: '/Home',
            headerTitle: 'Professor Home',
          }}
        />
      </Tabs>
    </NativeBaseProvider>
  );
};

export default _layout;
