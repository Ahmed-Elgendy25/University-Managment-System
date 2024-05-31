import React from 'react';
import { Box, Flex, Heading, Text, VStack } from 'native-base';

import { quizDetails } from './quizDetails';
import {
  Fontisto,
  FontAwesome5,
  SimpleLineIcons,
  Ionicons,
  Entypo,
} from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const Details = quizDetails;

// {
//   desc: 'Test your knowledge on biology',
//   startDate: '2024-05-15',
//   endDate: '2024-05-30',
//   instructorName: 'Dr. Smith',
//   totalDuration: 60,
//   totalScore: 100,
//   totalQuestions: 20,
// },
const AttendDetailsComponent = () => {
  return (
    <Flex bgColor={'amber.200'} p={'3'} h={'full'} justifyContent={'center'}>
      <Box px={3} mb={17}>
        <Heading fontWeight={'bold'} size={'2xl'}>
          Hurry up and take your attendance!
        </Heading>
      </Box>
      <Flex direction="row" w={'full'} my={'10'}>
        <Flex direction="row" my={5}>
          <Box
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#F19A1A'}
            mx={2}
            p={4}
            style={{
              borderRadius: 999, // Set a large value for borderRadius to make it a circle
              // width: '15%',

              borderColor: '#000',
              borderWidth: 2, // Adjust the borderWidth as needed
            }}
          >
            <Ionicons name="timer-sharp" size={36} color="black" />
          </Box>
          <Flex marginLeft={1}>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              2 mins
            </Text>
            <Text color={'gray.400'}>Time Duration</Text>
          </Flex>
        </Flex>

        <Flex direction="row" my={5}>
          <Box
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#F19A1A'}
            mx={2}
            p={4}
            rounded={'full'}
            style={{
              borderRadius: 999, // Set a large value for borderRadius to make it a circle
              // width: '15%',

              borderColor: '#000',
              borderWidth: 2, // Adjust the borderWidth as needed
            }}
          >
            <Fontisto name="date" size={24} color="black" />
          </Box>
          <Flex marginLeft={1}>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              11:10 PM
            </Text>
            <Text color={'gray.400'}>End Date</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <Button mode="contained">Take Attend</Button>
      </Box>
    </Flex>
  );
};

export default AttendDetailsComponent;
