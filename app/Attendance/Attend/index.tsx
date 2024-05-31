import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Flex, ScrollView } from 'native-base';
import AttendComponent from './AttendComponent';

const index = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ path: string }>();
  console.log(params);
  const { path } = params;
  useEffect(() => {
    navigation.setOptions({ title: path });
  }, []);
  return (
    <ScrollView>
      <AttendComponent />

      <AttendComponent />
      <AttendComponent />

      <AttendComponent />
      <AttendComponent />
      <AttendComponent />
    </ScrollView>
  );
};

export default index;
