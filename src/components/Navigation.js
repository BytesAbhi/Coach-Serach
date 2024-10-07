import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Message from '../assets/Svgs/MessageIcon';
import Home from '../assets/Svgs/HomeIcon';
import Search from '../assets/Svgs/SearchIcon';
import Profile from '../assets/Svgs/ProfileIcon';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Default active tab is 'Home'
  const navigation = useNavigation();

  // Define icons array with corresponding screen names
  const icons = [
    { id: 3, name: 'Home', Component: Home, label: 'Home' },
    { id: 2, name: 'OurCoaches', Component: Search, label: 'Search' },
    { id: 1, name: 'Chat', Component: Message, label: 'Chat' },
    { id: 4, name: 'User', Component: Profile, label: 'Profile' },
  ];

  const handlePress = (name) => {
    setActiveTab(name); // Set the active tab
    navigation.navigate(name); // Navigate to the corresponding screen
  };

  return (
    <View style={styles.containerjh}>
      {icons.map(({ id, name, Component, label }) => {
        const isActive = activeTab === name;
        const iconColor = isActive ? '#386BF6' : '#B6C5DA'; // Change color based on active state
        const textColor = isActive ? '#386BF6' : '#B6C5DA'; // Text color

        return (
          <TouchableOpacity
            key={id}
            style={styles.iconContainer}
            onPress={() => handlePress(name)} // Call handlePress on icon press
          >
            <Component color={iconColor} height={30} width={30} />
            <Text style={[styles.iconLabel, { color: textColor }]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerjh: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingVertical: 10,
    width: width,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Navigation;
