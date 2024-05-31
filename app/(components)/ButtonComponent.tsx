import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { Button } from 'native-base';
import { Link, router } from 'expo-router';
const ButtonComponent = ({
  children,
  icon,
  path,
}: {
  children: ReactNode;
  icon: JSX.Element;
  path: string;
}) => {
  {
    console.log(path);
  }
  return (
    <Link
      href={{
        pathname: `/QuizScreen/${path}`,
        params: { path },
      }}
      asChild
    >
      <Button
        leftIcon={icon}
        bgColor={'#F19A1A'}
        borderRadius={'full'}
        size={'md'}
        // onPress={() => router.replace(`/QuizScreen/${path}`)}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ButtonComponent;
