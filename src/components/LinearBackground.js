import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

export default function Page(props) {
  return (
    <LinearGradient
      colors={['rgba(50, 217, 217, 1)',  'rgba(20, 44, 116, 1)']}
      start={[0.8, 0]}
      style={{ 
        height: '100%',
        paddingTop: Constants.statusBarHeight+10,
        position: "relative",
        alignItems: "center"
      }}
    >
      {props.children}
    </LinearGradient>
  );
}