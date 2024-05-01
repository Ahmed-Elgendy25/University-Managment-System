import React from 'react';
import { Box, Flex, Text, VStack } from 'native-base';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const QuizDetailsComponent = () => {
  return (
    <VStack pb={3}>
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
          <Text color={'gray.400'}>Multiple Choice Questions</Text>
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
    </VStack>
  );
};

export default QuizDetailsComponent;
