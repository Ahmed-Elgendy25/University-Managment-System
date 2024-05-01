import { Link } from 'expo-router';
import { Box, Center, Flex, Heading, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Defs, LinearGradient, Path, Rect, Stop, Svg } from 'react-native-svg';

const RecommendationSubject = () => {
  return (
    <VStack mt={'6'} w={'full'} px={'5px'}>
      <Link
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          borderRadius: 15,
          backgroundColor: '#054978',
        }}
        push
        href={'/subjectDetails'}
      >
        <Box>
          <Svg width={75} height={75} viewBox="0 0 75 75">
            <Defs>
              <LinearGradient
                id="gradient"
                x1="3.45395"
                y1="75"
                x2="70.7952"
                y2="-0.230448"
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#FF922A" />
                <Stop offset="0.999809" stopColor="#FFB976" />
              </LinearGradient>
            </Defs>
            <Rect width={75} height={75} rx={15} fill="url(#gradient)" />
            <Path
              d="M14.5625 31.25L38 18.75L61.4375 31.25L38 43.75L14.5625 31.25Z"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M49.7188 59.375V37.5L38 31.25"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M55.9688 34.1667V44.8153C55.9694 45.1523 55.8604 45.4805 55.6583 45.7502C54.3425 47.501 48.7916 53.9063 38 53.9063C27.2084 53.9063 21.6575 47.501 20.3417 45.7502C20.1396 45.4805 20.0306 45.1523 20.0313 44.8153V34.1667"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Box>
        <Box px={'3'}>
          <Heading
            size={'sm'}
            px={'2'}
            color={`#fc843c`}
            fontWeight={'bold'}
            fontSize={'2xl'}
          >
            Physiology
          </Heading>
          <Text px={'2'} color={'white'}>
            Description: All can be perfect in math
          </Text>
          <Text mt={'5'} color={'white'}>
            • By Sarah William •
          </Text>
        </Box>
      </Link>
    </VStack>
  );
};

export default RecommendationSubject;
