import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { VStack } from 'native-base';
import Assignment from '../(components)/Assignment';

interface AssignmentData {
  id: number;
  title: string;
  finished: boolean;
}

const AssignmentsScreen: React.FC = () => {
  const [isClickedFirst, setIsClickedFirst] = useState(false);
  const [isClickedSecond, setIsClickedSecond] = useState(true);
  const [showFinished, setShowFinished] = useState(true);

  const onPressHandler = () => {
    console.log('pressed');
  };

  const onFinished = () => {
    console.log('pressed');
    setIsClickedSecond(true);
    setIsClickedFirst(false);
    setShowFinished(true);
  };

  const onUnfinished = () => {
    console.log('pressed');
    setIsClickedFirst(true);
    setIsClickedSecond(false);
    setShowFinished(false);
  };

  // Sample assignments data
  const assignments: AssignmentData[] = [
    { id: 1, title: 'Assignment 1', finished: true },
    { id: 2, title: 'Assignment 2', finished: false },
    { id: 3, title: 'Assignment 3', finished: true },
    { id: 4, title: 'Assignment 4', finished: false },
    { id: 5, title: 'Assignment 5', finished: true },
    { id: 6, title: 'Assignment 6', finished: false },
    { id: 7, title: 'Assignment 7', finished: true },
    { id: 8, title: 'Assignment 8', finished: false },
    { id: 9, title: 'Assignment 9', finished: true },
    { id: 10, title: 'Assignment 10', finished: false },
    { id: 11, title: 'Assignment 11', finished: true },
    { id: 12, title: 'Assignment 12', finished: false },
    { id: 13, title: 'Assignment 13', finished: true },
    { id: 14, title: 'Assignment 14', finished: false },
    { id: 15, title: 'Assignment 15', finished: true },
    { id: 16, title: 'Assignment 16', finished: false },
    { id: 17, title: 'Assignment 17', finished: true },
    { id: 18, title: 'Assignment 18', finished: false },
    { id: 19, title: 'Assignment 19', finished: true },
    { id: 20, title: 'Assignment 20', finished: false },
    // Add more assignments here
  ];

  // Filter assignments based on the showFinished state
  const filteredAssignments = showFinished
    ? assignments.filter((assignment) => assignment.finished)
    : assignments.filter((assignment) => !assignment.finished);

  return (
    <View style={styles.container}>
      <View style={styles.lastSection}>
        <View style={styles.first}>
          <Pressable
            onPress={onUnfinished}
            style={[styles.bottom, isClickedFirst && styles.clicked]}
          >
            <Text>Unfinished</Text>
          </Pressable>
          <Pressable
            onPress={onFinished}
            style={[styles.bottom, isClickedSecond && styles.clicked]}
          >
            <Text>Finished</Text>
          </Pressable>
        </View>
        <View style={styles.second}>
          <ScrollView>
            <VStack>
              {filteredAssignments.map((assignment) => (
                <Assignment key={assignment.id} assignment={assignment} />
              ))}
            </VStack>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
  topSection: {
    flex: 0.1,
    paddingTop: 20,
    textAlign: 'center',
  },
  icon: {
    borderWidth: 2,
    borderColor: '#F19A1A',
    width: 45,
    borderRadius: 100,
    padding: 3,
  },
  lastSection: {
    flex: 1,
    paddingBottom: 0,
  },
  first: {
    flex: 0.1,
    flexDirection: 'row',
    margin: 10,
  },
  second: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 0,
  },
  bottom: {
    width: 90,
    padding: 2,
    margin: 6,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  clicked: {
    backgroundColor: '#F19A1A',
  },
});

export default AssignmentsScreen;
