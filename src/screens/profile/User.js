import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Back from '../../assets/images/LeftArrow.png';
import Bell from '../../assets/images/Bell.png';
import styles from '../../styles/UserCss';
import {useNavigation} from '@react-navigation/native';

const User = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const notificationsData = [
    {id: '1', message: 'Your profile has been updated.'},
    {id: '2', message: 'You have a new message.'},
    {id: '3', message: 'Reminder: Meeting at 3 PM.'},
  ];

  const handleBackPress = () => {
    navigation.goBack(); 
  };

  return (
    <View>
      <View style={{backgroundColor: '#DE1F27'}}>
        <View>
          <TouchableOpacity onPress={handleBackPress}>
            <Image source={Back} style={{width: 24, height: 24}} />
          </TouchableOpacity>
          <Text>Profile</Text>
        </View>
        <View style={styles.bellIconDes}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)} // Show notification modal on bell icon click
          >
            <Image source={Bell} style={styles.BellIcon} />
            <View style={styles.NotiDot}></View>
          </TouchableOpacity>
        </View>

        {/* Modal for Notifications */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Notifications</Text>
              <FlatList
                data={notificationsData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <Text style={styles.notificationText}>{item.message}</Text>
                )}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default User;
