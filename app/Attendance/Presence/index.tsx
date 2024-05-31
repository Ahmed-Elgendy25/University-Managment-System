import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Flex, ScrollView } from 'native-base';
import ButtonComponent from '@/app/(components)/ButtonComponent';
import QuizzesList from '@/app/(components)/QuizzesList';
import IncomingComponent from '@/app/(components)/IncomingComponent';
import PresenceComponent from './PresenceComponent';

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
      <PresenceComponent />
      <PresenceComponent />

      <PresenceComponent />

      <PresenceComponent />
      <PresenceComponent />

      <PresenceComponent />
    </ScrollView>
  );
};

export default index;
