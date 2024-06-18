import React, { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Subject from '../(components)/Subject';
import { Link } from 'expo-router';
import CoursesData from '../(components)/CoursesData';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocationObject } from '../(components)/type';

const getColor = (id: number) => {
  // Define your logic to return a color based on the course ID
  // For demonstration purposes, I'm simply returning a color based on the ID
  const colors = [
    '#FFB976',
    '#00CFE8',
    '#28C76F',
    '#FFB976',
    '#00CFE8',
    '#28C76F',
  ];
  return colors[(id - 1) % colors.length];
};

let courses = CoursesData;
const Home = () => {
  const netinfo = useNetInfo();
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [cached, setCached] = useState<LocationObject | null>(null);

  const checkCachedLocation = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('location');
      if (jsonValue != null) {
        const parsedValue: LocationObject = JSON.parse(jsonValue);
        // console.log('Parsed Value:', parsedValue); // Log parsed value to inspect the structure
        // AsyncStorage.clear();
        setCached(parsedValue);
      }
    } catch (err) {
      Alert.alert(`Error, Can't get the cached location: `, String(err));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      NetInfo.fetch().then((state) => {
        if (isConnected === true && state.isConnected === true) {
          // console.log('Previous state isConnected:', isConnected);
          // console.log('Current state isConnected:', state.isConnected);
          checkCachedLocation();
        }
        setIsConnected(state.isConnected);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isConnected]);
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.userName}>Mohamed Ali</Text>
          {cached == null ? (
            <Text style={{ color: 'black' }}>Yalahwiiiii</Text>
          ) : (
            <Text style={{ marginHorizontal: 5 }}>
              {cached?.latitude} {cached?.longitude} {cached?.timeStamp}
            </Text>
          )}
        </View>
        {/* <Link href={{ pathname: '/(student)/aaaatttt/aaaatttt' }} asChild> */}
        <Link href={{ pathname: '(student)/Notifications/' }} asChild>
          <Pressable>
            <AntDesign name="bells" size={25} color="white" />
          </Pressable>
        </Link>
      </View>

      <View style={styles.middleSection}>
        <ScrollView>
          <View style={styles.subjectContainer}>
            {courses.map((course) => (
              <Subject
                key={course.id}
                color={getColor(course.id)}
                course={course}
              />
            ))}
          </View>
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
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
  },
  welcomeText: {
    color: 'white',
    fontWeight: '500',
  },
  userName: {
    fontWeight: '700',
    paddingVertical: 3,
    fontSize: 20,
    color: 'white',
  },
  subjectContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default Home;
