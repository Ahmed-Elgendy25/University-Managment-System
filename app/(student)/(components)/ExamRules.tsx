import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Box, View } from 'native-base';
import { Link } from 'expo-router';

const ExamRules = ({Enroll, examId}:{Enroll:boolean, examId:number}) => {

  return (
    <Box style={styles.container}>
     {
      Enroll && <Link style={styles.link}
        href={{
          pathname: '/ExamScreen/',
          params: { examId: examId,}
        }}
      >
        <View><Text style={styles.linkText}>Enroll</Text></View>
      </Link>
     }
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    marginBottom: 20,
  },
  link: {
    backgroundColor: '#F19A1A',
    textAlign: 'center',
    padding: 12,
    borderRadius: 10,
    width: '70%',
    alignSelf: 'center',
  },
  linkText: {
    backgroundColor: '#F19A1A',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default ExamRules;
