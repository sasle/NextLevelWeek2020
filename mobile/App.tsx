import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native'
import Home from './src/pages/Home'
import { AppLoading } from 'expo'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import Routes from './src/routes'

export default function App() {
  const fontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>
  }
  return (

    //<> </> é pra criar um fragment. basicamente se n bota ele n permite q vc retorne 2 comp's ao msm tmp.
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent></StatusBar>
      <Routes></Routes>
    </>
  );
}

