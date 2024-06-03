import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center } from 'native-base';
import { SessionTyped } from './professor-types';
import { AntDesign } from '@expo/vector-icons';
interface SessionProps {
  session: SessionTyped;
}

const SessionComponent = ({ session }: SessionProps) => {
  const onPressHandler = () => {
    console.log('Pressed');
  };

  return (
    <Pressable onPress={onPressHandler}>
      <Center
        h={70}
        bg="#F6F6F6"
        rounded="xl"
        shadow={0}
        style={styles.container}
      >
        <View style={styles.icon}>
          <AntDesign name="clockcircle" color="#F19A1A" size={40} />
        </View>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.sessionTitle}>{session.title}</Text>
            <Text style={styles.creationDate}>{session.creationDate}</Text>
          </View>
          <View style={styles.roomContainer}>
            <Text style={[styles.room, { backgroundColor: '#F6F6F6' }]}>
              {session.room}
            </Text>
          </View>
        </View>
      </Center>
    </Pressable>
  );
};
export default SessionComponent;

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
    paddingRight: 30,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
  },
  sessionTitle: {
    fontWeight: '400',
    fontSize: 16,
    paddingBottom: 5,
  },
  creationDate: {
    color: 'gray',
    fontSize: 10,
  },
  roomContainer: {
    padding: 10,
  },
  room: {
    borderRadius: 5,
    color: 'black',
    width: 90,
    textAlign: 'center',
    padding: 2,
  },
});
