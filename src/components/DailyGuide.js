import { StyleSheet, Text, View ,Image} from 'react-native'
import styles from '../styles/HomeStyle';
import Football from '../assets/images/football.png';
import Tennis from '../assets/images/tennis.png';
import Shoot from '../assets/images/shoot.png';
import React from 'react'

const DailyGuide = () => {
  return (
    <View style={styles.GuideSection}>
    <Text style={styles.GuideHeading}>Your Daily Guide</Text>
    <Text style={styles.GuidePara}>
      Lets Began your day with the best coaches in Your area With our best
      Guide
    </Text>
    <View style={styles.GuideCards}>
      <View style={styles.GuideCard}>
        <Image source={Football} style={styles.GuideCardImg} />
        <Text style={styles.GuideText}>Foot ball</Text>
      </View>
      <View style={styles.GuideCard}>
        <Image source={Tennis} style={styles.GuideCardImg} />
        <Text style={styles.GuideText}>Tennis</Text>
      </View>
      <View style={styles.GuideCard}>
        <Image source={Shoot} style={styles.GuideCardImg} />
        <Text style={styles.GuideText}>Basket ball</Text>
      </View>
    </View>
  </View>
  )
}

export default DailyGuide

