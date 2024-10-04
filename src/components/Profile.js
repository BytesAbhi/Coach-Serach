import {StyleSheet, Text, View,Image} from 'react-native';
import Dp from '../assets/images/Dp.png';
import Bell from '../assets/images/Bell.png';
import styles from '../styles/HomeStyle';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.Userprofile}>
      <View style={styles.ProfileDet}>
        <View style={styles.imageShadoweff}>
          <Image source={Dp} style={styles.dp} />
        </View>
        <View style={styles.UserDetails}>
          <Text style={styles.UserName}>Himanshu</Text>
          <Text style={styles.UserLocation}>Sec 34,Chandighar</Text>
        </View>
      </View>

      <View style={styles.bellIconDes}>
        <Image source={Bell} style={styles.BellIcon} />
        <View style={styles.NotiDot}></View>
      </View>
    </View>
  );
};

export default Profile;

