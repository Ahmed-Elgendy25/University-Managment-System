import { Box, Button, Text, View } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { GestureResponderEvent } from 'react-native';
import { router } from 'expo-router';

const styles = StyleSheet.create({
  root: { padding: 20, minHeight: 300 },

  codeFiledRoot: {
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    padding: 20,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
});

const CELL_COUNT = 4;

const EnterCode = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <Box
        size={'100%'}
        alignItems={'center'}
        flexDir={'column'}
        justifyContent={'center'}
      >
        <Text fontWeight={'bold'} fontSize={'3xl'}>
          Enter Code
        </Text>
        <Box p={10} mb={5} flexDir={'row'}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </Box>

        <Button
          w={'100%'}
          backgroundColor={'#F19A1A'}
          // onPress={(e: GestureResponderEvent) => handleSubmit()}
          onPress={() => router.push('resetpassword')}
        >
          <Text color={'white'}>Submit</Text>
        </Button>
      </Box>
    </SafeAreaView>
  );
};

export default EnterCode;
