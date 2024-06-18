import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { VStack } from 'native-base';
import Assignment from '../(components)/Assignment';

interface AssignmentData {
  id: number;
  title: string;
  finished: boolean;
  details: string;
  instructor: string;
  deadline: string;
}

const AssignmentsScreen: React.FC = () => {
  const [isClickedFirst, setIsClickedFirst] = useState(true);
  const [isClickedSecond, setIsClickedSecond] = useState(false);
  const [showFinished, setShowFinished] = useState(false);

  const onPressHandler = () => {
    console.log('pressed');
  };

  const onFinished = () => {
    setIsClickedSecond(true);
    setIsClickedFirst(false);
    setShowFinished(true);
  };

  const onUnfinished = () => {
    setIsClickedFirst(true);
    setIsClickedSecond(false);
    setShowFinished(false);
  };

  // Sample assignments data
  const assignments: AssignmentData[] = [
    { id: 1, title: 'Math Homework', finished: true, details: 'Complete exercises 1-10 from chapter 5', instructor: 'Dr. Johnson', deadline: '2024-06-10' },
    { id: 2, title: 'History Essay', finished: false, details: 'Write a 3-page essay on the causes of World War II', instructor: 'Prof. Smith', deadline: '2024-06-15' },
    { id: 3, title: 'Physics Lab Report', finished: true, details: 'Submit lab report for experiment #4', instructor: 'Dr. Williams', deadline: '2024-06-12' },
    { id: 4, title: 'Literature Analysis', finished: false, details: 'Analyze the themes in "To Kill a Mockingbird"', instructor: 'Prof. Brown', deadline: '2024-06-18' },
    { id: 5, title: 'Computer Science Project', finished: true, details: 'Complete coding project and submit documentation', instructor: 'Dr. Davis', deadline: '2024-06-11' },
    { id: 6, title: 'Chemistry Quiz', finished: false, details: 'Study chapters 6-8 for upcoming quiz', instructor: 'Prof. Martinez', deadline: '2024-06-14' },
    { id: 7, title: 'Art Presentation', finished: true, details: 'Prepare slides for art history presentation', instructor: 'Dr. Garcia', deadline: '2024-06-13' },
    { id: 8, title: 'Music Composition', finished: false, details: 'Compose a short piece for the piano', instructor: 'Dr. Lee', deadline: '2024-06-17' },
    { id: 9, title: 'Philosophy Paper', finished: true, details: 'Write a reflection paper on existentialism', instructor: 'Prof. Thompson', deadline: '2024-06-09' },
    { id: 10, title: 'Environmental Science Research', finished: false, details: 'Gather data for research project on climate change', instructor: 'Dr. Wilson', deadline: '2024-06-16' },
    { id: 11, title: 'Sociology Presentation', finished: true, details: 'Prepare presentation on social inequality', instructor: 'Prof. Adams', deadline: '2024-06-08' },
    { id: 12, title: 'Creative Writing Exercise', finished: false, details: 'Write a short story inspired by a personal experience', instructor: 'Dr. Moore', deadline: '2024-06-20' },
    { id: 13, title: 'Business Management Case Study', finished: true, details: 'Analyze case study on organizational behavior', instructor: 'Prof. Roberts', deadline: '2024-06-07' },
    { id: 14, title: 'Linguistics Presentation', finished: false, details: 'Prepare slides for phonetics presentation', instructor: 'Dr. Clark', deadline: '2024-06-19' },
    { id: 15, title: 'Fitness Assessment', finished: true, details: 'Complete fitness assessment and submit results', instructor: 'Coach Johnson', deadline: '2024-06-06' },
    { id: 16, title: 'Political Science Essay', finished: false, details: 'Write an essay on the role of media in politics', instructor: 'Prof. Taylor', deadline: '2024-06-21' },
    { id: 17, title: 'Astronomy Observation Journal', finished: true, details: 'Record observations of celestial objects', instructor: 'Dr. Turner', deadline: '2024-06-05' },
    { id: 18, title: 'Film Analysis', finished: false, details: 'Analyze a film of your choice using film theory concepts', instructor: 'Prof. Anderson', deadline: '2024-06-22' },
    { id: 19, title: 'Nutrition Research Paper', finished: true, details: 'Write a research paper on the benefits of a balanced diet', instructor: 'Dr. White', deadline: '2024-06-04' },
    { id: 20, title: 'Anthropology Fieldwork Report', finished: false, details: 'Conduct fieldwork and write a report on a cultural community', instructor: 'Prof. Carter', deadline: '2024-06-23' },
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
            <Text style={[styles.text, isClickedFirst ? { color: 'white' } : null]}>Unfinished</Text>
          </Pressable>
          <Pressable
            onPress={onFinished}
            style={[styles.bottom, isClickedSecond && styles.clicked]}
          >
            <Text style={[styles.text, isClickedSecond ? { color: 'white' } : null]}>Finished</Text>
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
    paddingTop: 0,
  },
  topSection: {
    flex: 0.1,
    paddingTop: 20,
    textAlign: 'center',
  },
  text:{
    fontSize: 18,
    fontWeight: '400',
    padding: 0,
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
    width: 130,
    padding: 2,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clicked: {
    backgroundColor: '#F19A1A',
  },
});

export default AssignmentsScreen;
