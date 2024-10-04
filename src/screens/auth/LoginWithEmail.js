// LoginWithEmail.js
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  Linking,
  Alert,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Mobile from '../../assets/images/Email.png';
import MobileAlt from '../../assets/images/Mobile-alt.png';
import styles from '../../styles/styles';

const LoginWithEmail = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSendOtp = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const actionCodeSettings = {
        url: 'https://your-app-url.com',
        handleCodeInApp: true,
      };

      await auth().sendSignInLinkToEmail(email.trim(), actionCodeSettings);
      Alert.alert(
        'Email Sent',
        'A link has been sent to your email. Please check your inbox.',
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
      Alert.alert('Email Error', 'Failed to send email. Please try again.');
      setLoading(false);
    }
  };

  const handlePhonePress = () => {
    navigation.navigate('LoginScreen'); // Navigate back to phone number login screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagedesign}>
        <View style={styles.Cirdes}></View>
        <View style={styles.imagebox}>
          <Image source={Mobile} style={styles.image} />
        </View>
      </View>

      <Text style={styles.enterfullnio}></Text>

      <View style={styles.singin}>
        <Text style={styles.welcomeText}>Hi Welcome!</Text>
        <Text style={styles.MobileNo}>Submit your Email Address</Text>

        <View style={styles.textdecor}>
          <View style={styles.line} />
          <Text style={styles.Login}>Log in or Sign up</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.InputEmail}
            placeholder="Enter Email Address"
            keyboardType="email-address"
            placeholderTextColor="#000"
            maxLength={30}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Display error message */}
        {errorMessage ? (
          <Text style={styles.enterfullnio}>{errorMessage}</Text>
        ) : null}

        {/* Button to send OTP */}
        <TouchableOpacity
          style={styles.SendOTP}
          onPress={handleSendOtp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>SEND OTP</Text>
          )}
        </TouchableOpacity>

        <View style={styles.textdecor}>
          <View style={styles.line} />
          <Text style={styles.Login}>Or</Text>
          <View style={styles.line} />
        </View>

        {/* Button to continue with phone number */}
        <TouchableOpacity
          style={styles.ContWithEmail}
          onPress={handlePhonePress}
        >
          <Image source={MobileAlt} style={{width: 18, height: 23}} />
          <Text style={styles.buttonEmail}>Continue with Phone Number</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By signing up, you agree to our{' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://example.com/terms')}
          >
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://example.com/privacy')}
          >
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginWithEmail;
