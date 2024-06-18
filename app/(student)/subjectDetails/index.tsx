import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import { Link, useLocalSearchParams, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentModules from '../../(student)/(components)/Mocks/StudentModules';

const index = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ courseName: string, courseDescription: string, courseInstructor: string }>();
  const { courseName, courseDescription, courseInstructor } = params;
  useEffect(() => {
    navigation.setOptions({ title: courseName });
  }, [courseName]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Course Name Section */}
        <View style={styles.course}>
          {/* <Text style={styles.courseName}>Pharma</Text> */}
          {/* Course Description */}
          <View style={styles.description}>
            <FontAwesome
              name="file-text-o"
              size={20}
              color="#F8E8EE"
              style={styles.icon}
            />
            <Text style={styles.descriptionText}>
              {courseDescription}
            </Text>
          </View>
          {/* Administrator Name */}
          <View style={styles.admin}>
            {/* <Icon name="user-o" size={20} color="#F8E8EE" style={styles.icon} /> */}
            <FontAwesome
              name="user-o"
              size={20}
              color="#F8E8EE"
              style={styles.icon}
            />
            <Text style={styles.adminText}>{ courseInstructor }</Text>
          </View>
        </View>

        {/* Module Section */}
        <View style={styles.content}>
          <View style={styles.modules}>
            <StudentModules />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  course: {
    flex: 0.3,
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#F19A1A',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  courseName: {
    flex: 0.3,
    padding: 5,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    color: '#F8E8EE',
  },
  description: {
    flex: 0.5,
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 3,
  },
  descriptionText: {
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 5,
    color: '#F8E8EE',
    flex: 1,
  },
  admin: {
    flex: 0.3,
    flexDirection: 'row',
    marginLeft: 10,
  },
  adminText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#F8E8EE',
  },
  icon: {
    padding: 3,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modules: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
});

// import { View, Text } from 'react-native';
// import React, { useEffect } from 'react';
// import { Box, Center, ScrollView } from 'native-base';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { BarChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';
// // import Modules from '../../../(components)/Mocks/Modules';
// // import dataModules from '../../../(components)/Mocks/dataModules';
// import Modules from '../(components)/Mocks/Modules';
// import dataModules from '../(components)/Mocks/dataModules';
// import { useLocalSearchParams, useNavigation } from 'expo-router';
// // Chart's Data & configurations//
// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//     },
//   ],
// };
// const chartConfig = {
//   backgroundGradientFrom: '#fb843476',
//   backgroundGradientFromOpacity: 1,
//   backgroundGradientTo: '#075798',
//   backgroundGradientToOpacity: 1,
//   color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
//   strokeWidth: 3, // optional, default 3
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false, // optional
// };
// type modulesProp = {
//   id: number;
//   name: string;
// };

// const modules: modulesProp[] = dataModules;

// const index = () => {
//   const navigation = useNavigation();
//   const params = useLocalSearchParams<{ courseName: string }>();
//   const { courseName } = params;
//   useEffect(() => {
//     navigation.setOptions({ title: courseName });
//   }, [courseName]);

//   return (
//     <ScrollView>
//       <SafeAreaView>
//         <BarChart
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//             // backgroundColor: '#a5fb34',
//           }}
//           data={data}
//           width={Dimensions.get('window').width} // from react-native
//           height={300}
//           yAxisLabel="$"
//           yAxisSuffix="" // Add the yAxisSuffix property
//           chartConfig={chartConfig}
//           verticalLabelRotation={30}
//         />

//         <Modules dataModules={modules} />
//       </SafeAreaView>
//     </ScrollView>
//   );
// };

// export default index;
