import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

export default function App() {
  // mostra a splash screen como se o app n tivesse carregado até as fonts carregarem
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style='light' />
      </>
    );
  }
}
