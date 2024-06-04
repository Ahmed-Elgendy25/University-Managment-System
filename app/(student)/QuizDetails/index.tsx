import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizDetailsComponent from '../(components)/QuizDetailsComponent';
import ExamRules from '../(components)/ExamRules';
import { Box, Flex } from 'native-base';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const index = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ examName: string }>();
  const { examName } = params;
  useEffect(() => {
    navigation.setOptions({ title: examName });
  }, [examName]);
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
