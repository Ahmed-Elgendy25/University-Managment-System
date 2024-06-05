import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, VStack } from 'native-base';

import { quizDetails } from './quizDetails';
import {
  Fontisto,
  FontAwesome5,
  SimpleLineIcons,
  Ionicons,
  Entypo,
} from '@expo/vector-icons';
import { ActivityIndicator, Button } from 'react-native-paper';
import { Alert, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LatLng } from 'react-native-maps';
import { useQuery } from '@tanstack/react-query';
import { getLocation, getLocationTyped } from '@/API/getLocation';
import cacheLocation from '@/API/cacheLocation';
import { LocationObject } from './type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';
import moment from 'moment';

// import useLocation from '@/Hooks/useLocation';
const MINUTES = 60 * 1000;
const Details = quizDetails;

// {
//   desc: 'Test your knowledge on biology',
//   startDate: '2024-05-15',
//   endDate: '2024-05-30',
//   instructorName: 'Dr. Smith',
//   totalDuration: 60,
//   totalScore: 100,
//   totalQuestions: 20,
// },

const AttendDetailsComponent = () => {
  let netinfo = useNetInfo();
  let [cached, setCached] = useState<string | null>('');
  const { data, error, refetch, isLoading } = useQuery<getLocationTyped, Error>(
    {
      queryKey: ['location'],
      queryFn: async () => {
        const location = await getLocation();
        const { latitude, longitude } = data?.coords || {};
        cacheLocation({
          latitude,
          longitude,
          timeStamp: moment().valueOf(),
        } as LocationObject);

        return location as getLocationTyped;
      },
    }
  );

  let checkCachedLocation = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('location');
      console.log(jsonValue);
      setCached(jsonValue);
      if (jsonValue != null && netinfo.isInternetReachable === false) {
        Alert.alert(
          'Internet Unreachable',
          `We see that you are offline. So don't worry, we cached your GPS location at ${moment()
            .format('h:mm a')
            .valueOf()}.`
        );
      }
    } catch (err) {
      Alert.alert(`Error, Can't get the cached location: `, err as string);
    }
  };

  if (netinfo.isInternetReachable === false) {
    checkCachedLocation();
  }

  //

  // const { location, errorMsg, getLocation } = useLocation();

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }
  // useEffect(() => {
  //   getLocation();
  // }, []);

  return (
    <Flex h={'full'} w={'full'} justifyContent={'center'}>
      <Box px={3} mb={17} mt={5}>
        <Heading fontWeight={'bold'} size={'2xl'}>
          Hurry up and take your attendance!
        </Heading>
      </Box>
      <Flex direction="row" w={'full'} flexWrap={'wrap'} mt={'5'}>
        <Flex direction="row" my={5}>
          <Box
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#F19A1A'}
            mx={2}
            p={4}
            style={{
              borderRadius: 999, // Set a large value for borderRadius to make it a circle
              // width: '15%',

              borderColor: '#000',
              borderWidth: 2, // Adjust the borderWidth as needed
            }}
          >
            <Ionicons name="timer-sharp" size={36} color="black" />
          </Box>
          <Flex>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              2 mins
            </Text>
            <Text color={'gray.400'}>Time Duration</Text>
          </Flex>
        </Flex>

        <Flex direction="row" my={5}>
          <Box
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#F19A1A'}
            mx={2}
            p={4}
            rounded={'full'}
            style={{
              borderRadius: 999, // Set a large value for borderRadius to make it a circle
              // width: '15%',

              borderColor: '#000',
              borderWidth: 2, // Adjust the borderWidth as needed
            }}
          >
            <Fontisto name="date" size={24} color="black" />
          </Box>
          <Flex>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              11:10 PM
            </Text>
            <Text color={'gray.400'}>End Date</Text>
          </Flex>
        </Flex>
      </Flex>

      <Box p={1}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <MapView style={styles.map}>
            <Marker
              title="auto"
              coordinate={{
                latitude: Number(data?.coords.latitude),
                longitude: Number(data?.coords.longitude),
              }}
            />
          </MapView>
        )}

        {/* {locationQuery.isError ? <Text>Couldn't load location</Text> : null} */}
      </Box>

      <Box my={2}>
        <Flex direction="row" my={5} justifyContent={'space-around'}>
          <Text color={'purple.700'} fontWeight={'bold'} fontSize={'md'}>
            Latiude:{' '}
            {isLoading ? <ActivityIndicator /> : Number(data?.coords.latitude)}
          </Text>
          <Text color={'purple.700'} fontWeight={'bold'} fontSize={'md'}>
            Longitude:{' '}
            {isLoading ? <ActivityIndicator /> : Number(data?.coords.longitude)}
          </Text>
        </Flex>
        <Button
          mode="contained"
          onPress={() => {
            refetch;
          }}
        >
          Take Attend
        </Button>

        <Text>{cached ? `${cached}` : 'msh sh8ala yalahwi'}</Text>
      </Box>
    </Flex>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 350,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   paragraph: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

export default AttendDetailsComponent;
