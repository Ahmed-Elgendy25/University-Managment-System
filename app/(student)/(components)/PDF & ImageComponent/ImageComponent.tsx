import { Image } from 'react-native';
import React, { ReactNode } from 'react';
import { Box, Flex, Text } from 'native-base';

const ImageComponent = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <Box bgColor={'red.200'} minW={'100%'} borderRadius={'lg'} my={0.5}>
      <Flex
        flexDirection={'row'}
        justifyContent={'flex-start'}
        alignContent={'center'}
      >
        {children}
        <Text
          fontWeight={'semibold'}
          fontSize={'md'}
          mx={'2'}
          alignSelf={'center'}
        >
          {name.substring(0, 10)}
        </Text>
      </Flex>
    </Box>
  );
};

export default ImageComponent;
