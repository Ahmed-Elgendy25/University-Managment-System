import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { VStack } from 'native-base';
import AssignmentData from '../(components)/AssignmentData';
import AssignmentComponent from '../(components)/AssignmentComponent';

let assignments = AssignmentData;

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.second}>
        <ScrollView>
          <VStack space={2}>
            {assignments.map((assignment) => (
              <AssignmentComponent
                key={assignment.id}
                assignment={assignment}
              />
            ))}
          </VStack>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    paddingBottom: 0,
  },
  second: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 0,
  },
});
