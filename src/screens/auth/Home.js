import {View, Image, Text, FlatList} from 'react-native';
import styles from '../../styles/HomeStyle';
import Profile from '../../components/Profile';
import DailyGuide from '../../components/DailyGuide';
import GetInTouch from '../../components/GetInTouch';
import HeroSection from '../../components/HeroSection';
import Coaches from '../../components/Coaches';
import CoachCard from '../../components/CoachCard';
import Students from '../../components/Students';
import Finance from '../../assets/images/Finance.png';
import Training from '../../components/Training';
import Navigation from '../../components/Navigation';

const coachDetails = [
  {
    id: '1',
    name: 'Annaya',
    rating: 4.5,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: [
      'Football',
      'Basketball',
      'Tennis',
      'Chess',
      'Volleyball',
      'Kho Kho',
    ],
    languages: ['Hindi', 'Kannada', 'English', 'French'],
    experience: '10 Years',
    buttons: [
      {id: '1', title: 'Chat', image: require('../../assets/images/Chat.png')},
      {
        id: '2',
        title: 'Call Now',
        image: require('../../assets/images/Call-Icon.png'),
      },
    ],
  },
  {
    id: '2',
    name: 'Annaya',
    rating: 4.5,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: [
      'Football',
      'Basketball',
      'Tennis',
      'Chess',
      'Volleyball',
      'Kho Kho',
    ],
    languages: ['Hindi', 'Kannada', 'English', 'French'],
    experience: '10 Years',
    buttons: [
      {id: '1', title: 'Chat', image: require('../../assets/images/Chat.png')},
      {
        id: '2',
        title: 'Call Now',
        image: require('../../assets/images/Call-Icon.png'),
      },
    ],
  },
  {
    id: '3',
    name: 'Annaya',
    rating: 4.5,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: [
      'Football',
      'Basketball',
      'Tennis',
      'Chess',
      'Volleyball',
      'Kho Kho',
    ],
    languages: ['Hindi', 'Kannada', 'English', 'French'],
    experience: '10 Years',
    buttons: [
      {id: '1', title: 'Chat', image: require('../../assets/images/Chat.png')},
      {
        id: '2',
        title: 'Call Now',
        image: require('../../assets/images/Call-Icon.png'),
      },
    ],
  },
];

const Home = () => {
  return (
    <View style={styles.HomeContainer}>
      <FlatList
        data={coachDetails.slice(0, 3)} 
        renderItem={({item, index}) => (
          <View
            style={{
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
              padding: 10,
              marginHorizontal: 10,
              marginTop: 5,
              marginBottom: index === 2 ? 25 : 5,
              borderRadius: 15,
            }}>
            <CoachCard coach={item} />
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Profile />
            <HeroSection />
            <DailyGuide />
            <GetInTouch />
            <Coaches />

            {/* Finance Section Code */}
            <View style={styles.FinanceSection}>
              <View style={styles.FinanceHeading}>
                <Text style={styles.FinanceText}>
                  Lets know About Our
                  <Text style={styles.FinanceStu}> Students....</Text>
                </Text>
                <Text style={styles.FinancePara}>
                  Our Coaches are there to Guide/ help you
                </Text>
              </View>
              <Image source={Finance} style={styles.FinanceImage} />
            </View>

            <Students />
            <View style={styles.CoachListSection}>
              <Text style={styles.CoachSectionHead}>Most Rated</Text>
            </View>
          </>
        }
        ListFooterComponent={
          <View style={styles.CoachListSection}>
            <Text style={styles.CoachSectionHead}>Training Journey</Text>
            <Training />
          </View>
        }
      />
      <Navigation/>
    </View>
  );
};

export default Home;
