import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizDetailsComponent from '../(components)/QuizDetailsComponent';
import ExamRules from '../(components)/ExamRules';
import { Box, Flex } from 'native-base';

const index = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <QuizDetailsComponent />
        <Box mt={3} w={'full'} h={'3px'} bgColor={'gray.300'}></Box>
        <ExamRules />
      </SafeAreaView>
    </ScrollView>
  );
};

export default index;
