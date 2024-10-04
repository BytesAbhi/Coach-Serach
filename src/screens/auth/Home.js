
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../../styles/HomeStyle';
import Profile from '../../components/Profile';
import DailyGuide from '../../components/DailyGuide';
import GetInTouch from '../../components/GetInTouch';
import HeroSection from '../../components/HeroSection';
import Coaches from '../../components/Coaches';

const Home = () => {
  return (
    <View style={styles.HomeContainer}>
      <Profile />

      <ScrollView>

        <HeroSection />
        <DailyGuide />
        <GetInTouch />
        <Coaches />     
      </ScrollView>
    </View>
  );
};

export default Home;
