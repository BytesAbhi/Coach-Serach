import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Training = () => {
  return (
    <View style={{backgroundColor:'black'}}>

      <TouchableOpacity>
        <Text style={{color: 'black'}}>
          View{' '}
          <Image
            source={require('../assets/images/Right.png')}
            style={{height: 25, width: 25}}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Training;

const styles = StyleSheet.create({});
