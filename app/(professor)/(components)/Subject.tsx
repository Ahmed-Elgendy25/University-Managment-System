import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface ItemProps {
  color: string;
  course: Course;
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

const Subject = ({ color, course }: PropsWithChildren<ItemProps>) => {
  const onPressHandler = () => {
    console.log('Pressed');
  };

  return (
    <Link
      push
      href={{
        pathname: '/(professor)/subjectDetails/',
        params: { courseName: course.title },
      }}
      asChild
    >
      <Pressable onPress={onPressHandler}>
        <Center
          w="100%"
          h="100"
          bg="#fefefe"
          rounded="xl"
          shadow={0}
          style={styles.container}
          marginBottom={10}
        >
          <View style={[styles.icon, { backgroundColor: color }]}>
            <FontAwesome name="graduation-cap" size={35} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{course.title}</Text>
            <Text numberOfLines={1} style={styles.description}>
              Description: {course.description}
            </Text>
            <Text style={styles.author}>{course.instructor}</Text>
          </View>
        </Center>
      </Pressable>
    </Link>
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
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'gray',
  },
  author: {
    color: 'gray',
    marginTop: 10,
  },
});

export default Subject;
