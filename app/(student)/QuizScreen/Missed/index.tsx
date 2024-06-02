import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import MissedComponent from '../../(components)/MissedComponent';

const index = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ path: string }>();
  console.log(params);
  const { path } = params;
  useEffect(() => {
    navigation.setOptions({ title: path });
  }, []);
  return (
    <View>
      <MissedComponent />
      <MissedComponent />
      <MissedComponent />
      <MissedComponent />
      <MissedComponent />
      <MissedComponent />
      <MissedComponent />
      <MissedComponent />
    </View>
  );
};

export default index;
