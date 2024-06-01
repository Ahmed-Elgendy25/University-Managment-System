import { View, Text } from 'react-native';
import React, { useState } from 'react';
import * as Location from 'expo-location';
import { LocationObject } from '@/app/(components)/type';

const useLocation = () => {
  const [location, setLocation] = useState<LocationObject>({
    latitude: null,
    longitude: null,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: 5,
    });
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    setIsLoading(false);
  }

  return { location, errorMsg, getLocation, isLoading };
};

export default useLocation;
// CUSTOM-API-FUNCTION
// import { View, Text } from 'react-native';
// import React, { useState } from 'react';
// import * as Location from 'expo-location';

// export type LocationObject = {
//   coords: {
//     latitude: number;
//     longitude: number;
//   };
// };

// export async function getLocation(): Promise<LocationObject | string> {
//   let { status } = await Location.requestForegroundPermissionsAsync();
//   if (status !== 'granted') {
//     return 'Permission to access location was denied';
//   }

//   let location = await Location.getCurrentPositionAsync({
//     accuracy: 5,
//   });
//   return location;
// }

//  CUSTOM-HOOK KONT 3AMELHA -> BAS FAKESS HST5DM REACT-QUERY A7SAN
