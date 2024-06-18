import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import sampleQuestions from '../(components)/questions';
import QuestionsComponent from '../(components)/QuestionsComponent';
import { useLocalSearchParams } from 'expo-router';
import { quizData } from '../(components)/quizData';


const Index = () => {
  // Navigation
  const params = useLocalSearchParams<{ examId: string }>();
  const { examId } = params;

  const exam = quizData.find((quiz) => quiz.id == examId);

  // State variables
  const [timeLeft, setTimeLeft] = useState<number>(parseInt(exam?.details.totalDuration) * 60); // Convert TotalDuration to integer
  const [submitted, setSubmitted] = useState<boolean>(false);


  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        {/* Display time left and score */}
        <View style={styles.score}>
          <Text style={styles.scoreText}>
            {submitted ? 'Finished' : `${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`}
          </Text>
        </View>
      </View>
      {/* Questions component section */}
      <ScrollView contentContainerStyle={styles.form}>
        <QuestionsComponent
          sampleQuestions={sampleQuestions}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          submitted={submitted}
          setSubmitted={setSubmitted}
          exam={exam}
        />
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  header: {
    paddingTop: 40,
    padding: 20,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: '#F19A1A',
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    color: 'white',
    width: 150,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  form: {
    flexGrow: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#F19A1A',
    width: '65%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    margin: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Index;
