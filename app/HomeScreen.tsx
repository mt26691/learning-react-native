import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
      <Button title="Go to Image" onPress={() => navigation.navigate('Image')} />
      <Button title="Go to Counter" onPress={() => navigation.navigate('Counter')} />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to list</Text>
      </TouchableOpacity>
    </View>
  );
}
