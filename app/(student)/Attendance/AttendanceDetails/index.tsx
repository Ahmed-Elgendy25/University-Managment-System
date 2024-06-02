import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizDetailsComponent from '../../(components)/QuizDetailsComponent';
import { Box, Button, Flex, ScrollView } from 'native-base';
import AttendDetailsComponent from '../../(components)/AttendDetailsComponent';

const index = () => {
  return (
    <ScrollView h={'full'} width={'full'} p={'1'} bgColor={'amber.200'}>
      <AttendDetailsComponent />
    </ScrollView>
  );
};

export default index;
