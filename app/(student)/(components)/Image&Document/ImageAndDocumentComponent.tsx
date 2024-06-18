import { ImageSourcePropType, Pressable } from 'react-native';
import React, { ReactNode } from 'react';
import { Box, Flex, Image, Text } from 'native-base';
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';

const ImageAndDocumentComponent = ({
  savePhotos,
  alt,
  children,
}: {
  children: ReactNode;
  alt: string;
  savePhotos: () => Promise<void>;
}) => {
  return (
    <Pressable
      onPress={savePhotos}
      style={{
        backgroundColor: '#ffffff7d',
        width: '100%',
        paddingVertical: 0,
        borderRadius: 6,
        marginVertical: 3,
      }}
    >
      <Flex flexDir={'row'} justifyContent={'flex-start'} width={'full'}>
        {children}
        <Text
          fontWeight={'medium'}
          color={'blue.300'}
          ml={2}
          alignSelf={'center'}
        >
          {alt.substring(0, 10)}
        </Text>
      </Flex>
    </Pressable>
  );
};

export default ImageAndDocumentComponent;
