import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
interface AssignmentProps {
  assignment: {
    title: string;
  };
}

const Assignment: React.FC<AssignmentProps> = ({ assignment }) => {
  const onPressHandler = () => {
    console.log('Pressed');
  };

  return (
    <Pressable onPress={onPressHandler}>
      <Center
        h="100"
        bg="#F6F6F6"
        rounded="xl"
        shadow={0}
        style={styles.container}
      >
        <View style={styles.icon}>
          <AntDesign name="filetext1" size={40} color="#F19A1A" />
        </View>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.assignmentNumber}>{assignment.title}</Text>
            <Text style={styles.deadline}>Deadline: Sept. 3 | 12 PM</Text>
          </View>
          <View style={styles.daysLeftContainer}>
            <Text style={[styles.daysLeft, { backgroundColor: '#ED7633' }]}>
              1 more day
            </Text>
          </View>
        </View>
      </Center>
    </Pressable>
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
  assignmentNumber: {
    fontWeight: '400',
  },
  deadline: {
    color: 'gray',
    fontSize: 10,
  },
  daysLeftContainer: {
    padding: 20,
  },
  daysLeft: {
    borderRadius: 10,
    color: 'white',
    width: 90,
    textAlign: 'center',
    padding: 2,
    marginTop: 20,
  },
});

export default Assignment;
