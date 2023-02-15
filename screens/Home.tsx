import React from 'react';
import {Button, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="go to onboarding"
        onPress={_ => navigation.navigate('OnBoarding')}
      />
    </View>
  );
};

export default Home;
