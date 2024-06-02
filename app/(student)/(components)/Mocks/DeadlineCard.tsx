import { View } from 'react-native';
import React from 'react';
import { Box, Flex, Spacer, Text } from 'native-base';

type deadLinesType = {
  id: number;
  title: string;
  description: string;
  date: string;
  status: string;
};
const deadlinesMockData: deadLinesType[] = [
  {
    id: 1,
    title: 'Project Proposal Submission',
    description: 'Submit the proposal for the upcoming project.',
    date: '2024-04-25',
    status: 'pending', // or "completed"
  },
  {
    id: 2,
    title: 'Research Paper Deadline',
    description: 'Submit the research paper for review.',
    date: '2024-05-10',
    status: 'pending',
  },
  {
    id: 3,
    title: 'Final Presentation',
    description: 'Prepare and deliver the final presentation.',
    date: '2024-05-20',
    status: 'pending',
  },

  {
    id: 4,
    title: 'Final Presentation',
    description: 'Prepare and deliver the final presentation.',
    date: '2024-05-20',
    status: 'pending',
  },

  {
    id: 5,
    title: 'Final Presentation',
    description: 'Prepare and deliver the final presentation.',
    date: '2024-05-20',
    status: 'pending',
  },

  {
    id: 6,
    title: 'Final Presentation',
    description: 'Prepare and deliver the final presentation.',
    date: '2024-05-20',
    status: 'pending',
  },

  {
    id: 7,
    title: 'Final Presentation',
    description: 'Prepare and deliver the final presentation.',
    date: '2024-05-20',
    status: 'pending',
  },

  {
    id: 8,
    title: 'Final Presentation',
    description: 'Prepare and deliver the final presentation.',
    date: '2024-05-20',
    status: 'pending',
  },
  {
    id: 9,
    title: 'Final Presentation',
    description: 'Prepare and deliver the final presentation.',
    date: '2024-05-20',
    status: 'pending',
  },
  {
    id: 10,
    title: 'Final Presentation',
    description: 'Prepare and deliver the final presentation.',
    date: '2024-05-20',
    status: 'pending',
  },
  {
    id: 11,
    title: 'Final Presentation',
    description: 'Prepare and deliver the final presentation.',
    date: '2024-05-20',
    status: 'pending',
  },
];

const DeadlineCard = () => {
  return (
    <>
      {deadlinesMockData.map((deadline: deadLinesType) => {
        return (
          <Box
            key={deadline.id}
            backgroundColor={'#62b8fe'}
            marginY={'5px'}
            rounded={'md'}
            h={'60'}
            paddingX={'15px'}
            paddingY={'10px'}
          >
            <Text color={'white'}>{deadline.title}</Text>
          </Box>
        );
      })}
    </>
  );
};

export default DeadlineCard;
