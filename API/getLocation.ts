// CUSTOM-API-FUNCTION

// import { View, Text } from 'react-native';
// import React, { useState } from 'react';
import * as Location from 'expo-location';

export type getLocationTyped = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export async function getLocation(): Promise<getLocationTyped | string> {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return 'Permission to access location was denied';
  }

  let location = await Location.getCurrentPositionAsync({
    accuracy: 5,
  });
  return location;
}
