import AsyncStorage from '@react-native-async-storage/async-storage';

const getCachedLocation = async () => {
  try {
    // Fetch location data from AsyncStorage
    const cachedData = await AsyncStorage.getItem('location');
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      console.log('Cached Location:', parsedData);
      // AsyncStorage.clear();
      return parsedData;
    }
    return null; // Return null if no cached data found
  } catch (error) {
    console.log('Error retrieving cached location data:', error);
    return null;
  }
};

export default getCachedLocation;

// const getCachedLocation = async () => {
//   const [location, setLocation] = useState<LocationObject>({
//     latitude: null,
//     longitude: null,
//   });
//   try {
//     // Fetch location data from AsyncStorage
//     const cachedData = await AsyncStorage.getItem('location');
//     if (cachedData) {
//       const parsedData = JSON.parse(cachedData);
//       setLocation(parsedData);
//       console.log('Cached Location:', parsedData);
//       return location;
//     }
//   } catch (error) {
//     console.log('Error retrieving cached location data:', error);
//     return null;
//   }
// };

// export default getCachedLocation;
