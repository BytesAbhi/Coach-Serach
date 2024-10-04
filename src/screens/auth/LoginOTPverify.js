import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  Linking,
} from 'react-native';
import mobileVerify from '../../assets/images/mobileVerify.png';
import MobileAlt from '../../assets/images/Mobile-alt.png';
import styles from '../../styles/styles';

const Loginotpverify = ({ route }) => {
  const { contactInfo, isEmail } = route.params; 
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    let interval;
    if (isOtpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, isOtpSent]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    if (text.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }

    setOtp(newOtp);
  };

  const handleVerifyOtp = async () => {
    const fullOtp = otp.join('');
    if (fullOtp.length === 4) {
      // Verify OTP with your backend logic (either for email or phone)
      alert('OTP Verified'); // You can replace this with your verification logic
    } else {
      alert('Please enter a valid 4-digit OTP');
    }
  };

  const handleSendOtp = () => {
    if (timer === 0) {
      setIsOtpSent(true);
      setTimer(60);
      // Logic to resend OTP to the respective contact method
      // This could be an API call to your backend for sending the OTP
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagedesign}>
        <View style={styles.Cirdes}></View>
        <View style={styles.imagebox}>
          <Image source={mobileVerify} style={styles.image} />
        </View>
      </View>

      <Text style={styles.enterfullnio}></Text>
      <View style={styles.singin}>
        <Text style={styles.welcomeText}>OTP Verification</Text>
        <Text style={styles.MobileNo}>
          A 4-digit code has been sent to your {isEmail ? 'email' : 'phone'}.
        </Text>

        <Text style={{ color: '#000' }}>
          An OTP has been sent to {contactInfo}
        </Text>

        {/* 4-digit OTP inputs */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>

        {isOtpSent && timer > 0 ? (
          <Text style={styles.timerText}>Resend OTP in {timer}s</Text>
        ) : (
          <TouchableOpacity style={styles.resendButton} onPress={handleSendOtp}>
            <Text style={styles.resendText}>Didn't receive? Resend OTP</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <Image source={MobileAlt} style={{ width: 18, height: 23 }} />
          <Text style={styles.buttonEmail}>Continue with Email Id</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By signing up, you agree to our{' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://example.com/terms')}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://example.com/privacy')}>
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Loginotpverify;
