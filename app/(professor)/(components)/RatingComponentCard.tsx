import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
import { RatingItem } from './professor-types';

const RatingComponentCard = ({ rating }: { rating: RatingItem }) => {
  return (
    <View style={styles.container}>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={20}
        startingValue={rating.rating}
        readonly
        // selectedColor="#f1c40f" // Changed the fill color of the stars
        ratingColor="black" // Changed the color of the stars
        style={styles.rating}
      />
      <Text style={styles.feedback}>{rating.feedback}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginVertical: 5,
    marginBottom: 20,
  },
  rating: {
    paddingHorizontal: 10,
  },
  feedback: {
    fontSize: 16,
    textAlign: 'left', // Changed 'start' to 'left'
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

export default RatingComponentCard;
