import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  Userprofile: {
    flex: 0,
    width: width * 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
    borderColor: '#808080',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  ProfileDet: {
    flex: 0,
    flexDirection: 'row',
    gap: 10,
  },
  imageShadoweff: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
    borderRadius: 50,
  },
  dp: {
    height: 50,
    width: 50,
  },
  UserDetails: {
    flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  UserName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  UserLocation: {
    fontSize: 12,
    fontWeight: 'light',
    color: 'black',
  },
  bellIconDes: {
    marginTop: 5,
    position: 'relative',
  },
  BellIcon: {
    height: 25,
    width: 25,
  },
  NotiDot: {
    height: 7.5,
    width: 7.5,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 2.5,
    right: 5,
    borderRadius: 50,
  },
  //   this section is for scrolling images

  carouselContainer: {
    height: 200,
    width: width * 0.975,
    marginHorizontal: 'auto',
    marginTop: 15,
    marginBottom: 5,
    overflow: 'hidden',
    borderRadius: 10,
  },
  imageContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0,
  },
  // imageovelay: {
  //     width: 0,
  //     height: '0',
  //     borderStartColor:"black",
  //     position:'relative',
  //     zIndex:1,
  //   },
  //   carouselText:{
  //     color:'white',
  //     position:'absolute',
  //     bottom:10,
  //     left:15,
  //     fontSize:36,
  //   },

  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    padding: 2.5,
    borderRadius: 8,
    marginHorizontal: 5,
    borderColor: '#fff',
    // borderColor:'#001B7A',
    borderWidth: 1,
  },

  activeDot: {
    backgroundColor: 'white',
  },

  //   Your Daily Guide Style
  GuideSection: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: width * 1,
  },
  GuideHeading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  GuidePara: {
    color: '#5C5C5C',
    fontSize: 16,
    paddingVertical: 10,
  },
  GuideCards: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width * 0.95,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  GuideCard: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 25,
    paddingHorizontal: 22.5,
    color: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  GuideCardImg: {
    height: 71,
    width: 71,
  },
  GuideText: {
    color: 'black',
  },

  //   Get In Touch
  ContactCards: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width * 0.95,
    flexDirection: 'row',
    paddingVertical: 0,
    backgroundColor: '#FFF0E6',
    borderRadius: 10,
    marginTop: 15,
  },
  ContactCard: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 25,
    paddingHorizontal: 12.5,
  },
  ImageShadEff: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    width: 65,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 0,
  },
  ContactCardImg: {
    height: 40,
    width: 40,
  },
  ContactText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  // Coaches card section
  CoachCards: {
  },
  CoachCard: {
    flex:0,
    alignItems:'center',
    justifyContent:'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal:7.5,
    borderRadius:10,
  },
  CoachCardImg: {
    height: 100,
    width: 100,
    borderRadius: 70,
  },
  CoachText: {
    color:'black'
  },
  CoachConnect: {
    color:'black'
  },
  CoachConnecttext: {
    color:'black'
  },
});

export default styles;
