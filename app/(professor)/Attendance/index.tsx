import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { VStack } from 'native-base';
import SessionsData from '../(components)/SessionsData';
import SessionComponent from '../(components)/SessionComponent';
import { Link } from 'expo-router';

const Sessions = SessionsData;

const index = () => {
  const onPressHandler = () => {
    console.log('Pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.second}>
        <ScrollView>
          <VStack>
            {Sessions.map((session) => (
              <SessionComponent key={session.id} session={session} />
            ))}
          </VStack>
        </ScrollView>
      </View>
      <Link
        href={{
          pathname: '/(professor)/Attendance/CreateAttendSession/',
        }}
        push
        asChild
      >
        <Pressable style={styles.icon} onPress={onPressHandler}>
          <AntDesign name="pluscircleo" color="#F19A1A" size={55} />
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    position: 'relative',
  },
  topSection: {
    flex: 0.1,
    paddingTop: 20,
    textAlign: 'center',
  },
  icon: {
    borderRadius: 100,
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  second: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 0,
  },
});

export default index;
