import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Box, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import Subject from '../(components)/Subject';
import { Button } from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';

import getCachedLocation from '@/API/getCachedLocation';

const Home = () => {
  let [isDisabled, setIsDisabled] = useState<boolean>(true);
  let [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [cachedLocation, setCachedLocation] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // Offline - Retrieve cached data
      if (isConnected) {
        const cachedLocationData = await getCachedLocation();
        setCachedLocation(cachedLocationData);
      }
    };

    fetchData();
  }, [isConnected]);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View>
          <Text>Welcome back</Text>
          <Text
            style={{
              fontWeight: '700',
              padding: 3,
              fontSize: 20,
              color: 'white',
            }}
          >
            Mohamed
          </Text>
        </View>
        <Pressable>
          <AntDesign name="bells" size={25} color="white" />
        </Pressable>
      </View>
      <Box my={3}>
        <Button
          disabled={isDisabled}
          buttonColor={'#f72d2d'}
          textColor="white"
          mode="elevated"
          // onPress={handleErgentAttend}
        >
          Ergent Attend
        </Button>
      </Box>

      <View style={styles.middleSection}>
        <ScrollView>
          <VStack space={0} alignItems="center">
            <Subject color={'#FFB976'} courseName="Course 1" />
            <Subject color={'#00CFE8'} courseName="Course 2" />
            <Subject color={'#28C76F'} courseName="Course 3" />
            <Subject color={'#FFB976'} courseName="Course 4" />
            <Subject color={'#FFB976'} courseName="Course 1" />
            <Subject color={'#00CFE8'} courseName="Course 5" />
            <Subject color={'#28C76F'} courseName="Course 6" />
            <Subject color={'#FFB976'} courseName="Course 7" />
            <Subject color={'#00CFE8'} courseName="Course 8" />
            <Subject color={'#28C76F'} courseName="Course 9" />
            <Subject color={'#FFB976'} courseName="Course 10" />
            <Subject color={'#00CFE8'} courseName="Course 11" />
            <Subject color={'#28C76F'} courseName="Course 12" />
          </VStack>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F19A1A',
  },
  topSection: {
    backgroundColor: '#F19A1A',
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  middleSection: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 20,
  },
});

export default Home;
