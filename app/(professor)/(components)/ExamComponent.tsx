import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center } from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import { ExamsTyped } from './professor-types';
import { Link, router } from 'expo-router';

interface ExamProps {
  exam: {
    id: number;
    name: string;
    date: string;
    duration: string;
  };
}

const ExamComponent = ({ exam }: { exam: ExamsTyped }) => {
  return (
    <Link
      href={{
        pathname: `/(professor)/QuizScreen/QuizDetails/`,
        params: { examName: exam.name },
      }}
      asChild
    >
      <Pressable>
        <Center
          h="100"
          bg="#F6F6F6"
          rounded="xl"
          shadow={0}
          style={styles.container}
        >
          <View style={styles.icon}>
            <AntDesign name="profile" size={50} color="#707070" />
          </View>
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.examName}>{exam.name}</Text>
              <Text style={styles.date}>{exam.date}</Text>
              <Text style={styles.date}>{exam.duration}</Text>
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
  examName: {
    fontWeight: '400',
    fontSize: 16,
    paddingBottom: 5,
  },
  date: {
    color: 'gray',
    fontSize: 10,
  },
});

export default ExamComponent;
