import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizDetailsComponent from '../../(components)/QuizDetailsComponent';
import { Box, Button, Flex } from 'native-base';
import AttendDetailsComponent from '@/app/(components)/AttendDetailsComponent';

const index = () => {
  return (
    <Box h={'full'}>
      <AttendDetailsComponent />
    </Box>
  );
};

export default index;
