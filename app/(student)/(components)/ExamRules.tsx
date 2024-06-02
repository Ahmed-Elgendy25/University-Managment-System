import { Box, Center, Flex, Heading, Text, View } from 'native-base';
import { FlatList } from 'react-native';

import React from 'react';
import { Link } from 'expo-router';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:
      'You must complete this test in one session-make sure your internet is reliable.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title:
      'Cheating is not allowed, If you tried to use google or any other application during the exam, You will recieve only ONE WARNING then you will be banned from session! ',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <Flex direction="row">
    <Box
      w={'6px'}
      h={'6px'}
      marginLeft={'2'}
      alignSelf={'center'}
      backgroundColor={'black'}
      borderRadius={'full'}
    />
    <Text fontWeight={'medium'} p={'3'}>
      {title}
    </Text>
  </Flex>
);
const ExamRules = () => {
  return (
    <Box h={'full'}>
      <Box pb={2}>
        <Heading size={'lg'} p={3}>
          Before you start
        </Heading>

        <FlatList
          renderItem={({ item }) => <Item title={item.title} />}
          data={DATA}
          keyExtractor={(item) => item.id}
        />
        <Text fontStyle={'italic'} textAlign={'center'} mt={3}>
          ALL THE BEST!!
        </Text>
      </Box>

      <Link
        href={'/ExamScreen/'}
        style={{
          backgroundColor: '#F19A1A',
          textAlign: 'center',
          padding: 21,

          width: '100%',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Text color={'white'} fontWeight={'bold'} fontSize={'lg'}>
          Enroll
        </Text>
      </Link>
    </Box>
  );
};

export default ExamRules;
