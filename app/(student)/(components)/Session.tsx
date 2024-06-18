import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import { SessionsTyped } from './type';
import { Link } from 'expo-router';

const Session = ({ session }: { session: SessionsTyped }) => {

  return (
    <Link
      href={{
        pathname: `(student)/Attendance/AttendanceDetails/`,
        params: { sessiontitle: session.title },
      }}
      asChild
    >
      <Pressable>
        <Center
          h="75"
          bg="#F6F6F6"
          rounded="xl"
          shadow={0}
          style={styles.container}
        >
          <View style={styles.icon}>
          <Entypo name="back-in-time" size={43} color="#F19A1A" />
          </View>
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.sessionTitle}>{session.title}</Text>
              <Text style={styles.date}>{session.date}</Text>
              <Text style={styles.date}>{session.duration}</Text>
            </View>
          </View>
        </Center>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
    container: {
        width: 350,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      icon: {
        width: 70,
        height: 70,
        margin: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1.9,
      },
      textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      sessionTitle: {
        fontWeight: '500',
        fontSize: 16,
        paddingBottom: 5,
      },
      date: {
        color: 'gray',
        fontSize: 10,
      },
      daysLeftContainer: {
        marginRight: 10,
        paddingTop: 5,
      },
      daysLeft: {
        borderRadius: 10,
        color: 'white',
        width: 90,
        textAlign: 'center',
        padding: 2,
      },
});

export default Session;
