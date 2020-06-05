import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StatusBar} from 'react-native'
import Home from './src/pages/Home'

export default function App() {
  return (
    //<> </> é pra criar um fragment. basicamente se n bota ele n permite q vc retorne 2 comp's ao msm tmp.
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent></StatusBar>
    <Home></Home>
    </>
  );
}

