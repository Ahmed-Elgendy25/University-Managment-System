import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center } from 'native-base';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faFileText } from '@fortawesome/free-solid-svg-icons';

import { AntDesign } from '@expo/vector-icons';
import { AssignmentProps } from './professor-types';
import { Link } from 'expo-router';

const AssignmentComponent = ({
  assignment,
}: {
  assignment: AssignmentProps;
}) => {
  const onPressHandler = () => {
    console.log('Pressed');
  };

  return (
    <Link
      href={{
        pathname: '/(professor)/AssignmentScreen/AsssignmentDetails',
        params: { assignmentName: assignment.title },
      }}
      asChild
    >
      <Pressable onPress={onPressHandler}>
        <Center
          h={100}
          bg="#F6F6F6"
          rounded="xl"
          shadow={0}
          style={styles.container}
        >
          <View style={styles.icon}>
            <AntDesign name="filetext1" color="#707070" size={50} />
          </View>
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.assignmentNumber}>{assignment.title}</Text>
              <Text style={styles.deadline}>Deadline: Sept. 3 | 12 PM</Text>
            </View>
          </View>
        </Center>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1.9,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  assignmentNumber: {
    fontWeight: '400',
  },
  deadline: {
    color: 'gray',
    fontSize: 10,
  },
});

export default AssignmentComponent;
