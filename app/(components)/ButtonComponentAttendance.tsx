import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { Button } from 'native-base';
import { Link, router } from 'expo-router';
const ButtonComponentAttendance = ({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) => {
  {
    console.log(path);
  }
  return (
    <Link
      href={{
        pathname: `/Attendance/${path}/`,
        params: { path },
      }}
      asChild
    >
      <Button
        bgColor={'#F19A1A'}
        borderRadius={'full'}
        size={'lg'}
        mx={1.5}
        p={'3'}
        px={'7'}
        // onPress={() => router.replace(`/QuizScreen/${path}`)}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ButtonComponentAttendance;
