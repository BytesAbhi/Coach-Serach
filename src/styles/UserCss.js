import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

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
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      notificationText: {
        marginVertical: 5,
      },
      closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#386BF6',
        borderRadius: 5,
        alignItems: 'center',
      },
      closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },

})