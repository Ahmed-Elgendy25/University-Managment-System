import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'native-base';
import RatingData from '../(components)/RatingsData';
import { Rating } from 'react-native-ratings';
import RatingComponentCard from '../(components)/RatingComponentCard';

const ratings = RatingData;
const totalRatings: number = ratings.length;
const averageRating =
  ratings.reduce((acc, rating) => acc + rating.rating, 0) / totalRatings;

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingCountContainer}>
        <Text style={styles.ratingCount}>Fresh Springs Inc.</Text>
        <View style={styles.averageRatingContainer}>
          <Rating
            type="star"
            ratingCount={1}
            imageSize={20}
            startingValue={averageRating}
            readonly
            style={{ paddingRight: 15 }}
          />
          <Text style={styles.averageRatingText}>
            {averageRating.toFixed(1)} ({totalRatings} Ratings)
          </Text>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.recentReviewsText}>Most recent reviews</Text>
        {ratings.map((rating) => (
          <RatingComponentCard key={rating.id} rating={rating} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  ratingCountContainer: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  averageRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  averageRatingText: {
    fontWeight: 'bold',
    color: 'gray',
  },
  recentReviewsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginVertical: 20,
    paddingLeft: 10,
  },
});

export default index;
