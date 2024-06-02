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
const QuizDetailsComponent = () => {
  return (
    <VStack pb={3}>
      <Box px={3} py={2} mb={17}>
        <Heading fontWeight={'bold'} size={'2xl'}>
          Description
        </Heading>
        <Text fontWeight={'medium'}>
          Test your knowledge on Compiler Theory
        </Text>
      </Box>
      <Flex>
        <Flex mb={5} direction="row">
          <Box
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#F19A1A'}
            mx={2}
            p={2}
            style={{
              borderRadius: 999, // Set a large value for borderRadius to make it a circle
              // width: '15%',

              borderColor: '#000',
              borderWidth: 2, // Adjust the borderWidth as needed
            }}
          >
            <Entypo name="list" size={36} color="black" />
          </Box>
          <Flex marginLeft={1}>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              15
            </Text>
            <Text color={'gray.400'}>Multiple Choice Questions</Text>
          </Flex>
        </Flex>

        <Flex direction="row" my={5}>
          <Box
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#F19A1A'}
            mx={2}
            p={2}
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
              10:10 PM
            </Text>
            <Text color={'gray.400'}>Start Date</Text>
          </Flex>
        </Flex>

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
            <Fontisto name="date" size={24} color="black" />
          </Box>
          <Flex marginLeft={1}>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              11:10 PM
            </Text>
            <Text color={'gray.400'}>End Date</Text>
          </Flex>
        </Flex>

        <Flex direction="row" my={5}>
          <Box
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#F19A1A'}
            mx={2}
            p={3}
            style={{
              borderRadius: 999, // Set a large value for borderRadius to make it a circle
              // width: '15%',

              borderColor: '#000',
              borderWidth: 2, // Adjust the borderWidth as needed
            }}
          >
            <FontAwesome5 name="chalkboard-teacher" size={24} color="black" />
          </Box>
          <Flex marginLeft={1}>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              DR.Ahmed Emad
            </Text>
            <Text color={'gray.400'}>Instructor Name</Text>
          </Flex>
        </Flex>
        <Flex direction="row" mt={5}>
          <Box
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#F19A1A'}
            mx={2}
            p={2}
            style={{
              borderRadius: 999, // Set a large value for borderRadius to make it a circle
              // width: '15%',

              borderColor: '#000',
              borderWidth: 2, // Adjust the borderWidth as needed
            }}
          >
            <SimpleLineIcons name="badge" size={36} color="black" />
          </Box>
          <Flex marginLeft={1}>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              30 mark
            </Text>
            <Text color={'gray.400'}>Multiple Choice Questions</Text>
          </Flex>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default QuizDetailsComponent;
