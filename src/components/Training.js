import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const trainingData = [
  {
    id: '1',
    backgroundColor: '#FAEADA',
    rodColor: '#BEBEBE',
    circleColor: '#CE853E',
    icon: require('../assets/images/Clipboard.png'),
    heading: 'Onboarding & Assessment',
    paragraph:
      'Trainees undergo an initial assessment (e.g., fitness level, goals, etc.) to tailor the training plan.',
  },
  {
    id: '2',
    backgroundColor: '#DAF2F1',
    rodColor: '#BEBEBE',
    circleColor: '#32B2AD',
    icon: require('../assets/images/Aim.png'),
    heading: 'Goal Setting & Planning',
    paragraph:
      "Coaches design a customized training plan based on the trainee's goals.",
  },
  {
    backgroundColor: '#F6DDDE',
    rodColor: '#BEBEBE',
    circleColor: '#B55457',
    icon: require('../assets/images/Weight.png'),
    heading: 'Training & Monitoring',
    paragraph:
      'The app tracks key metrics (e.g., calories burned, weights lifted) and provides analytics to visualize progress.',
  },
  {
    backgroundColor: '#F1E6F6',
    rodColor: '#BEBEBE',
    circleColor: '#A05BBD',
    icon: require('../assets/images/Check.png'),
    heading: 'Check-Ins & Adjustments',
    paragraph:
      'Coaches tweak the training plan based on performance, feedback, and evolving goals.',
  },
  {
    backgroundColor: '#E9FBEE',
    rodColor: '#BEBEBE',
    circleColor: '#6EBD84',
    icon: require('../assets/images/Trophy.png'),
    heading: 'Completion & Review',
    paragraph:
      'Trainees receive a certificate or badge for completing the training program, which they can share on social media or their profile.',
  },
];

const Training = () => {
  const renderItem = ({item,index}) => (
    <View style={{flex: 0, alignItems: 'center', justifyContent: 'center',}}>
      <View
        style={{
          flex: 0,
          justifyContent: 'flex-end',
          flexDirection: 'row',
          backgroundColor: item.backgroundColor,
          borderRadius: 10,
          width: width * 0.9,
          gap: 15,
          position: 'relative',
          paddingRight: 15,
          paddingTop: 25,
          paddingBottom: 15,
          marginTop: 45,
          marginBottom: index === trainingData.length - 1 ? 20 : 0,
        }}>
        <View
          style={{
            flex: 0,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: 15,
            top: -35,
          }}>
          <View
            style={{
              flex: 0,
              alignItems: 'center',
              justifyContent: 'center',
              height: 65,
              width: 65,
              borderRadius: 50,
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: -5,
              },
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation: 5,
            }}>
            <Image source={item.icon} style={{height: 40, width: 40}} />
          </View>
          <View
            style={{
              height: 50,
              width: 10,
              backgroundColor: item.rodColor,
            }}></View>
          <View
            style={{
              height: 32.5,
              width: 32.5,
              borderRadius: 50,
              borderColor: 'black',
              borderWidth: 2,
              borderStyle: 'dotted',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -5,
            }}>
            <View
              style={{
                height: 25.5,
                width: 25.5,
                borderRadius: 50,
                backgroundColor: item.circleColor, // Dynamic circle color
              }}></View>
          </View>
        </View>
        <View style={{width: '75%'}}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '700'}}>
            {item.heading}
          </Text>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '400'}}>
            {item.paragraph}
          </Text>
          <View
            style={{
              alignItems: 'flex-end',
              marginTop: 10,
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
                View More
              </Text>
              <Image
                source={require('../assets/images/Right.png')}
                style={{height: 20, width: 20, marginLeft: 2.5}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={trainingData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default Training;
