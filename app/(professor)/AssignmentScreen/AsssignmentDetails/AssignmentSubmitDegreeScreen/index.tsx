import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const index = () => {
    const navigation = useNavigation(); // Add this line to get the navigation object
    const params = useLocalSearchParams<{ studentName: string }>(); // Remove the parentheses after 'params'
    const { studentName } = params;

    useEffect(() => {
        navigation.setOptions({ title: studentName });
    }, [studentName]);

    return (
        <View>
            <Text>AssignmentSubmitDegreeScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default index;
