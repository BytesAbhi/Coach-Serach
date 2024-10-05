import { StyleSheet, Text, TouchableOpacity, View, Animated, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Message from '../assets/Svgs/Message';
import Home from '../assets/Svgs/Home';
import Search from '../assets/Svgs/Search';
import Profile from '../assets/Svgs/Profile';

const {width, height} = Dimensions.get('window');


const Navigation = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Default active tab is 'Home'

  // Define icons array
  const icons = [
    { id: 1, name: 'Message', Component: Message, label: 'Messages' },
    { id: 2, name: 'Search', Component: Search, label: 'Search' },
    { id: 3, name: 'Home', Component: Home, label: 'Home' },
    { id: 4, name: 'Profile', Component: Profile, label: 'Profile' },
  ];

  return (
    <View style={styles.containerjh}>
      {icons.map(({ id, name, Component, label }) => {
        const isActive = activeTab === name;
        const iconColor = isActive ? '#386BF6' : '#B6C5DA'; // Change color based on active state
        const textColor = isActive ? '#386BF6' : '#B6C5DA'; // Text color

        return (
          <TouchableOpacity
            key={id}
            style={[styles.iconContainer, isActive && styles.activeIconContainer]} // Move up when active
            onPress={() => setActiveTab(name)}
          >
            <Component color={iconColor} height={30} width={30} />
            {isActive && <Text style={[styles.iconLabel, { color: textColor }]}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerjh: {
    flexDirection: 'row',
    // backgroundColor: 'black',
    justifyContent: 'space-around', 
    alignItems: 'flex-end',         
    paddingVertical: 10,
    width:width * 1,
  },
  iconContainer: {
    alignItems: 'center',
    position: 'relative',
    transform: [{ translateY: 0 }], 
  },
  activeIconContainer: {
    transform: [{ translateY: -10 }], // Move icon up by 10px when active
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Navigation;
