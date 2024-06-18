import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Subject from '../(components)/Subject';
import { Link } from 'expo-router';

interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

const courses : Course [] = [
  {
    id: 1,
    title: 'Mathematics 101',
    instructor: 'Dr. John Smith',
    description: 'Introduction to basic mathematical concepts.',
  },
  {
    id: 2,
    title: 'Computer Science Fundamentals',
    instructor: 'Prof. Sarah Johnson',
    description: 'Fundamental concepts of computer science and programming.',
  },
  {
    id: 3,
    title: 'Literature Appreciation',
    instructor: 'Dr. Emily Brown',
    description: 'Exploring classic and contemporary literature.',
  },
  {
    id: 4,
    title: 'History of Art',
    instructor: 'Prof. Michael Davis',
    description: 'Survey of major art movements throughout history.',
  },
  {
    id: 5,
    title: 'Chemistry for Beginners',
    instructor: 'Dr. Anna Lee',
    description: 'Introduction to basic concepts of chemistry.',
  },
  {
    id: 6,
    title: 'Introduction to Psychology',
    instructor: 'Dr. Rachel White',
    description: 'Overview of key concepts and theories in psychology.',
  },
  {
    id: 7,
    title: 'Introduction to Economics',
    instructor: 'Prof. David Carter',
    description: 'Fundamental principles of economics.',
  },
  {
    id: 8,
    title: 'Music Theory',
    instructor: 'Dr. James Anderson',
    description: 'Exploration of music theory and composition.',
  },
  {
    id: 9,
    title: 'Introduction to Philosophy',
    instructor: 'Prof. Elizabeth Clark',
    description: 'Survey of major philosophical ideas and thinkers.',
  },
  {
    id: 10,
    title: 'Environmental Science',
    instructor: 'Dr. Mark Wilson',
    description: 'Study of the natural environment and human impact on it.',
  },
  {
    id: 11,
    title: 'Introduction to Sociology',
    instructor: 'Prof. Laura Taylor',
    description: 'Overview of key concepts and theories in sociology.',
  },
  {
    id: 12,
    title: 'Creative Writing Workshop',
    instructor: 'Dr. Christopher Moore',
    description: 'Workshop-style course focusing on creative writing techniques.',
  },
  {
    id: 13,
    title: 'Introduction to Business Management',
    instructor: 'Prof. William Roberts',
    description: 'Fundamental concepts of business organization and management.',
  },
  {
    id: 14,
    title: 'Introduction to Linguistics',
    instructor: 'Dr. Maria Garcia',
    description: 'Study of the structure and function of human language.',
  },
  {
    id: 15,
    title: 'Physical Fitness and Health',
    instructor: 'Coach Daniel Johnson',
    description: 'Promoting physical fitness and healthy lifestyle habits.',
  },
  {
    id: 16,
    title: 'Introduction to Political Science',
    instructor: 'Prof. Jennifer Adams',
    description: 'Overview of key concepts and theories in political science.',
  },
  {
    id: 17,
    title: 'Introduction to Astronomy',
    instructor: 'Dr. Robert Turner',
    description: 'Exploration of celestial objects and phenomena in the universe.',
  },
  {
    id: 18,
    title: 'Introduction to Film Studies',
    instructor: 'Prof. Olivia Martinez',
    description: 'Analysis of film as an art form and cultural artifact.',
  },
  {
    id: 19,
    title: 'Introduction to Nutrition',
    instructor: 'Dr. Kimberly Wilson',
    description: 'Study of the role of nutrients in human health and wellness.',
  },
  {
    id: 20,
    title: 'Introduction to Anthropology',
    instructor: 'Prof. Andrew Thompson',
    description: 'Overview of key concepts and theories in anthropology.',
  },
  // Add more courses as needed
];

const getColor = (id: number) => {
  // Define your logic to return a color based on the course ID
  // For demonstration purposes, I'm simply returning a color based on the ID
  const colors = ['#FFB976', '#00CFE8', '#28C76F', '#FFB976', '#00CFE8', '#28C76F'];
  return colors[(id - 1) % colors.length];
};

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.userName}>Dr. Ahmed Emad</Text>
        </View>
        <Link href={{ pathname: '/(professor)/Notifications/' }} asChild>
          <Pressable>
            <AntDesign name="bells" size={25} color="white" />
          </Pressable>
        </Link>
      </View>

      <View style={styles.middleSection}>
        <ScrollView>
          <View style={styles.subjectContainer}>
            {courses.map(course => (
              <Subject
                key={course.id}
                color={getColor(course.id)}
                course={course}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F19A1A',
  },
  topSection: {
    backgroundColor: '#F19A1A',
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  middleSection: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
  },
  welcomeText: {
    color: 'white',
    fontWeight: '500',
  },
  userName: {
    fontWeight: '700',
    paddingVertical: 3,
    fontSize: 20,
    color: 'white',
  },
  subjectContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default Home;
