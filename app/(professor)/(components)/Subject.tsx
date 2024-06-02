import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
interface ItemProps {
  color: string;
  courseName: string;
}

const Subject = ({ color, courseName }: PropsWithChildren<ItemProps>) => {
  const onPressHandler = () => {
    console.log('Pressed');
  };

  return (
    <Pressable onPress={onPressHandler}>
      <Link
        push
        href={{
          pathname: '/(professor)/subjectDetails/',
          params: { courseName: courseName },
        }}
      >
        <Center
          w="100%"
          h="100"
          bg="#F6F6F6"
          rounded="xl"
          shadow={0}
          style={styles.container}
        >
          <View style={[styles.icon, { backgroundColor: color }]}>
            <FontAwesome name="graduation-cap" size={35} color="black" />
          </View>
          <View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>{courseName}</Text>
              <Text style={{ color: 'gray' }}>
                Description: All can be perfect in math...
              </Text>
            </View>
            <View>
              <Text style={{ color: 'gray', marginTop: 10 }}>
                By Sarah William
              </Text>
            </View>
          </View>
        </Center>
      </Link>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Subject;
