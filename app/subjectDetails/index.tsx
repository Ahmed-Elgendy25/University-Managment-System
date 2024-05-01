import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Box, Center, ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
// import Modules from '../../../(components)/Mocks/Modules';
// import dataModules from '../../../(components)/Mocks/dataModules';
import Modules from '../(components)/Mocks/Modules';
import dataModules from '../(components)/Mocks/dataModules';
import { useLocalSearchParams, useNavigation } from 'expo-router';
// Chart's Data & configurations//
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
const chartConfig = {
  backgroundGradientFrom: '#fb843476',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#075798',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
type modulesProp = {
  id: number;
  name: string;
};

const modules: modulesProp[] = dataModules;

const index = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ courseName: string }>();
  const { courseName } = params;
  useEffect(() => {
    navigation.setOptions({ title: courseName });
  }, [courseName]);

  return (
    <ScrollView>
      <SafeAreaView>
        <BarChart
          style={{
            marginVertical: 8,
            borderRadius: 16,
            // backgroundColor: '#a5fb34',
          }}
          data={data}
          width={Dimensions.get('window').width} // from react-native
          height={300}
          yAxisLabel="$"
          yAxisSuffix="" // Add the yAxisSuffix property
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />

        <Modules dataModules={modules} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default index;
