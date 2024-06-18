import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { quizDataTyped } from './type'; // Ensure these types are correctly defined

const Exam = ({ exam }: { exam: quizDataTyped[] }) => {

  // const exam = quizData.find((quiz) => quiz.id === examId);
  const examName = exam?.title;
  const examId = exam?.id;
  if (!exam) {
    return (
      <Center h="100" bg="#F6F6F6" rounded="xl" shadow={0} style={styles.container}>
        <Text style={styles.examtitle}>Exam not found</Text>
      </Center>
    );
  }

  return (
    <Link
      href={{
        pathname: '/(student)/QuizDetails/',
        params: { examName: examName, ExamId: examId },
      }}
      asChild
    >
      <Pressable>
        <Center
          h="100"
          bg="#F6F6F6"
          rounded="xl"
          shadow={0}
          style={[
            styles.container,
            // You can uncomment and customize the opacity logic if needed
            // {
            //   opacity:
            //     exam.status === 'submitted' ? 1 :
            //     exam.status === 'missed' ? 1 :
            //     exam.isActive && exam.status === 'upcoming' ? 1 : 0.5,
            // },
          ]}
        >
          <View style={styles.icon}>
            <AntDesign name="profile" size={60} color="#F19A1A" />
          </View>
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.examtitle}>{exam?.title}</Text>
              <View style={styles.infoContainer}>
                <View>
                  <Text style={styles.date}>{exam?.date}</Text>
                  <Text style={styles.date}>{exam?.details?.totalDuration}</Text>
                </View>
                <View style={styles.daysLeftContainer}>
                  <Text style={[styles.daysLeft, { backgroundColor: '#F19A1A' }]}>
                    {exam?.details.startTime}
                  </Text>
                </View>
              </View>
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
  examtitle: {
    fontWeight: '400',
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
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Exam;
