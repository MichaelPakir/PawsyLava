import { View, Text, Image} from 'react-native';
import React from 'react';
import { Colors } from './../../constants/Colors';


export default function LoginScreen() {
  return (
    <View>
      <Image source={require('./../../assets/images/react-logo.png')}
        style={{
            width: '100%',
            height: 500
        }}
      />
        
      <View style={{
        padding:20,
        display: 'flex',
        alignItems: 'center'
      }}>

        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center'
        }}>Ready to make a new friend?</Text>
        <Text style={{
            fontFamily: 'outfit',
            fontSize: 18,
            textAlign: 'center',
            color: Colors

        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>
    </View>
  )
}