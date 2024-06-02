import React from 'react';
import { quizzList } from './quiz-list';
import { Box, Flex, VStack, Text, Center, Heading } from 'native-base';
import { Link } from 'expo-router';
import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const QuizzesList = () => {
  return (
    <>
      {quizzList.map((quiz) => {
        return (
          <Link
            key={quiz.name}
            push
            href={{
              pathname: '/QuizDetails/',
              params: { name: quiz.name },
            }}
            asChild
          >
            <Pressable>
              <Center>
                <VStack p={'3'}>
                  <Flex
                    direction="row"
                    h={'32'}
                    w={'3/4'}
                    rounded={'3xl'}
                    bgColor={'#F19A1A'}
                  >
                    <Flex
                      justifyContent={'space-between'}
                      direction="column"
                      h={'full'}
                      p={3}
                    >
                      <Heading size={'lg'} color={'white'}>
                        Compiler Theory
                      </Heading>
                      <Text color={'white'} fontSize={'sm'}>
                        Instructor:
                        <Text fontWeight={'bold'}> DR.Ahmed Emad</Text>
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent={'space-between'}
                      direction="column"
                      h={'full'}
                      p={3}
                    >
                      <Heading size={'sm'} mt={2} color={'white'}>
                        Start Date: <Text>{quiz.startDate}</Text>
                      </Heading>
                      <Heading size={'sm'} mt={2} color={'white'}>
                        StartTime: <Text>{quiz.startTime}</Text>
                      </Heading>
                    </Flex>
                  </Flex>
                </VStack>
              </Center>
            </Pressable>
          </Link>
        );
      })}
    </>
  );
};

export default QuizzesList;

// import React from 'react';
// import { quizzList } from './quiz-list';
// import { Box, Flex, VStack, Text } from 'native-base';
// import { Link } from 'expo-router';

// const QuizzesList = () => {
//   return (
//     <>
//       {quizzList.map((quiz) => {
//         return (
//           <Link key={quiz.name} push href="/QuizDetails">
//             <VStack
//               bgColor={'warmGray.500'}
//               borderBottomWidth={'1'}
//               borderBottomColor={'#2c2c2c59'}
//               py={'25px'}
//               px={'15px'}
//             >
//               <Flex direction="row" justifyContent={'space-between'}>
//                 <Box>
//                   <Text
//                     color={'black'}
//                     fontWeight={'extrabold'}
//                     fontSize={'2xl'}
//                   >
//                     {quiz.name}
//                   </Text>
//                 </Box>

//                 <Box>
//                   <Text
//                     color={'black'}
//                     fontWeight={'extrabold'}
//                     fontSize={'2xl'}
//                   >
//                     {quiz.name}
//                   </Text>
//                 </Box>
//               </Flex>
//             </VStack>
//           </Link>
//         );
//       })}
//     </>
//   );
// };

// export default QuizzesList;
