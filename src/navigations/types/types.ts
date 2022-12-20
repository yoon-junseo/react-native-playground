import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

// RootStack
export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Detail: { id: number; name: string };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
