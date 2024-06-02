import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocationObject } from '@/app/(student)/(components)/type';

const cacheLocation = async (location: LocationObject) => {
  try {
    await AsyncStorage.setItem('location', JSON.stringify(location));
  } catch (error) {
    console.log('Error caching product data:', error);
  }
};
export default cacheLocation;
