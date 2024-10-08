import React, {useRef, useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Animated,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import styles from '../../styles/OurCoaches';
import CoachCard from '../../components/CoachCard';

const coachDetails = [
  {
    id: '1',
    name: 'Annaya',
    rating: 4.5,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Football', 'Basketball'],
    languages: ['Hindi', 'English'],
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
    name: 'Himanshu',
    rating: 4.2,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Tennis', 'Volleyball'],
    languages: ['Kannada', 'French'],
    experience: '8 Years',
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
    name: 'Rahul',
    rating: 4.8,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Cricket', 'Hockey'],
    languages: ['English', 'Hindi'],
    experience: '12 Years',
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
    id: '4',
    name: 'Sofia',
    rating: 4.7,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Badminton', 'Table Tennis'],
    languages: ['Spanish', 'English'],
    experience: '7 Years',
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
    id: '5',
    name: 'Karan',
    rating: 4.3,
    verified: false,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Swimming', 'Diving'],
    languages: ['French', 'Hindi'],
    experience: '5 Years',
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
    id: '6',
    name: 'Anjali',
    rating: 4.6,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Yoga', 'Pilates'],
    languages: ['Hindi', 'English'],
    experience: '6 Years',
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
    id: '7',
    name: 'Vikram',
    rating: 4.5,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Martial Arts', 'Boxing'],
    languages: ['Kannada', 'English'],
    experience: '9 Years',
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
    id: '8',
    name: 'Neha',
    rating: 4.9,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Rock Climbing', 'Hiking'],
    languages: ['English', 'Spanish'],
    experience: '11 Years',
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
    id: '9',
    name: 'Pooja',
    rating: 4.4,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Skating', 'Gymnastics'],
    languages: ['French', 'Hindi'],
    experience: '8 Years',
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
    id: '10',
    name: 'Arjun',
    rating: 4.2,
    verified: false,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Athletics', 'Jumping'],
    languages: ['Hindi', 'English'],
    experience: '4 Years',
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
    id: '11',
    name: 'Riya',
    rating: 4.1,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Surfing', 'Windsurfing'],
    languages: ['Spanish', 'French'],
    experience: '5 Years',
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
    id: '12',
    name: 'Kriti',
    rating: 4.8,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Skiing', 'Snowboarding'],
    languages: ['Hindi', 'English'],
    experience: '6 Years',
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
    id: '13',
    name: 'Nikhil',
    rating: 4.0,
    verified: false,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Fencing', 'Archery'],
    languages: ['English', 'Kannada'],
    experience: '3 Years',
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
    id: '14',
    name: 'Simran',
    rating: 4.6,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Netball', 'Field Hockey'],
    languages: ['Hindi', 'English'],
    experience: '7 Years',
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
    id: '15',
    name: 'Siddharth',
    rating: 4.7,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Baseball', 'Softball'],
    languages: ['Spanish', 'English'],
    experience: '9 Years',
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
    id: '16',
    name: 'Tanvi',
    rating: 4.5,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Billiards', 'Snooker'],
    languages: ['Hindi', 'French'],
    experience: '6 Years',
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
    id: '17',
    name: 'Karan',
    rating: 4.4,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Dance', 'Fitness'],
    languages: ['Kannada', 'English'],
    experience: '4 Years',
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
    id: '18',
    name: 'Aditi',
    rating: 4.9,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Karate', 'Taekwondo'],
    languages: ['Hindi', 'English'],
    experience: '8 Years',
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
    id: '19',
    name: 'Deepak',
    rating: 4.3,
    verified: true,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Squash', 'Racquetball'],
    languages: ['French', 'English'],
    experience: '5 Years',
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
    id: '20',
    name: 'Neeraj',
    rating: 4.5,
    verified: false,
    coachImage: require('../../assets/images/CoachImage.png'),
    skills: ['Cricket', 'Football'],
    languages: ['Hindi', 'Spanish'],
    experience: '7 Years',
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

const OurCoaches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [filteredData, setFilteredData] = useState(coachDetails);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const filterAnim = useRef(new Animated.Value(1)).current;

  const handleSearch = text => {
    setSearchTerm(text);

    const filtered = coachDetails.filter(
      coach =>
        coach.name.toLowerCase().includes(text.toLowerCase()) ||
        coach.skills.some(skill =>
          skill.toLowerCase().includes(text.toLowerCase()),
        ) ||
        coach.languages.some(language =>
          language.toLowerCase().includes(text.toLowerCase()),
        ),
    );

    setFilteredData(filtered);
  };

  const handleFilterBySport = sport => {
    setSelectedSport(sport);
    const filtered = coachDetails.filter(coach => coach.skills.includes(sport));
    setFilteredData(filtered);
  };

  const handleFilterByLanguage = language => {
    setSelectedLanguage(language);
    const filtered = coachDetails.filter(coach =>
      coach.languages.includes(language),
    );
    setFilteredData(filtered);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedSport('');
    setSelectedLanguage('');
    setFilteredData(coachDetails);
  };

  const scrollToTop = () => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY === 0 && !isFilterVisible) {
      setIsFilterVisible(true);
      Animated.timing(filterAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (offsetY > 0 && isFilterVisible) {
      setIsFilterVisible(false);
      Animated.timing(filterAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 2}}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={handleBackPress}>
          <Image
            source={require('../../assets/images/LeftArrow.png')}
            style={styles.backButtonIcon}
            
          />
        <Text style={styles.headerTitle}>Our Coaches</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/Filter.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/back-arrow.png')}
            style={styles.backarrowimg}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.Searchinput}
          placeholder="Search Coach"
          value={searchTerm}
          onChangeText={handleSearch}
          clearButtonMode="always"
          placeholderTextColor={'#808080'}
        />
        <TouchableOpacity onPress={clearSearch}>
          <Image
            source={require('../../assets/images/close.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.chessButtonContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            'Football',
            'Basketball',
            'Tennis',
            'Baseball',
            'Volleyball',
            'Hockey',
            'Cricket',
          ].map((sport, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.chessButtons,
                selectedSport === sport && {backgroundColor: '#ccc'},
              ]}
              onPress={() => handleFilterBySport(sport)}>
              <Text style={styles.chessButtonText}>{sport}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        ref={flatListRef}
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <View
            style={{
              paddingTop: 20,
              borderBottomWidth: 1,
              paddingHorizontal: 15,
              borderStyle: 'dashed',
              borderColor: '#CCCCCC',
              paddingBottom: index === filteredData.length - 1 ? 0 : 15,
            }}>
            <CoachCard coach={item} />
          </View>
        )}
        showsVerticalScrollIndicator={true}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        initialNumToRender={2}
        // Optionally implement getItemLayout if your items have fixed heights
        // getItemLayout={(data, index) => (
        //   { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
        // )}
      />

      {/* <View style={styles.navigationContainer}> */}
      {/* <Navigation /> */}
      {/* </View> */}
    </View>
  );
};

export default OurCoaches;
