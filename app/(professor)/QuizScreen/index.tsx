import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { VStack } from 'native-base';
import Exams from '../(components)/Exams';
import ExamComponent from '../(components)/ExamComponent';

const exams = Exams;
export default function index() {
  const onPressHandler = () => {
    console.log('pressed');
  };

  const onFinished = () => {
    console.log('pressed');
    // setIsClickedSecond(true);
    // setIsClickedFirst(false);
    // setShowFinished(true);
  };

  const onUnfinished = () => {
    console.log('pressed');
    // setIsClickedFirst(true);
    // setIsClickedSecond(false);
    // setShowFinished(false);
  };

  // Sample Exams data
  return (
    <View style={styles.container}>
      <View style={styles.lastSection}>
        <View style={styles.second}>
          <ScrollView>
            <VStack>
              {exams.map((exam) => (
                <ExamComponent key={exam.id} exam={exam} />
              ))}
            </VStack>
          </ScrollView>
        </View>
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
