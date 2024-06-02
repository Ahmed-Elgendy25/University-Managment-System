import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center } from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import {
  StudentExamProps,
  StudentExamProps_And_StudentAssignmentProps,
} from './professor-types';
const StudentComponent = ({
  student,
}: {
  student: StudentExamProps_And_StudentAssignmentProps;
}) => {
  const handlePress = () => {
    //student.submissionTime&&navigation.navigate('AssignmentSubmit', { assignment: assignment });
    //student.score&&navigation.navigate('AssignmentDetails', { assignment: assignment });
  };

  return (
    <Pressable onPress={handlePress}>
      <Center
        h={60}
        bg="#F6F6F6"
        rounded="xl"
        shadow={0}
        style={styles.container}
      >
        <View style={styles.icon}>
          <AntDesign name="user" color="#F19A1A" size={35} />
        </View>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.assignmentNumber}>{student.name}</Text>
          </View>
          {student.submissionTime && (
            <View style={styles.daysLeftContainer}>
              <Text style={[styles.daysLeft, { backgroundColor: '#F19A1A' }]}>
                {student.submissionTime}
              </Text>
            </View>
          )}
          {student.score && (
            <View style={styles.daysLeftContainer}>
              <Text style={[styles.daysLeft, { backgroundColor: '#F19A1A' }]}>
                {student.score}
              </Text>
            </View>
          )}
        </View>
      </Center>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  assignmentNumber: {
    fontWeight: '400',
  },
  daysLeftContainer: {
    marginRight: 10,
  },
  daysLeft: {
    borderRadius: 10,
    color: 'white',
    width: 90,
    textAlign: 'center',
    padding: 2,
  },
});

export default StudentComponent;
