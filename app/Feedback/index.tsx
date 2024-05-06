import React, { useState, useEffect } from 'react';
import { Flex, TextArea, Button, Text, Image, Box, Heading } from 'native-base';
import StarRating from 'react-native-star-rating-widget';

const Index = () => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      height="full"
    >
      <Box my={3}>
        <Heading size={'lg'} textAlign={'center'}>
          Submit Your feedback
        </Heading>
        <Text>Your Feedback Helps To Improve Educational Quality</Text>
      </Box>
      <TextArea
        value={textAreaValue}
        onChangeText={(text) => setTextAreaValue(text)}
        w="75%"
        maxW="300"
        autoCompleteType="off"
        my={3}
      />
      <StarRating rating={rating} onChange={setRating} />
      <Button mt={6} rounded="full" w="75%" bgColor="#F19A1A">
        <Text fontWeight="bold" color="white">
          Submit
        </Text>
      </Button>
    </Flex>
  );
};

export default Index;
