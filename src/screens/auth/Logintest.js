import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { AuthService } from '../../services/FirebaseConfig'; // Import AuthService

const Logintest = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const success = await AuthService.login(email, password);
      if (success) {
        navigation.navigate('Loginotpverify');
      }
    } catch (error) {
      Alert.alert('Login Error', error.message); // Show error message to the user
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 20, borderWidth: 1, padding: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('LoginWithEmail')} style={{ marginTop: 10 }}>
        Login with Email
      </Text>
    </View>
  );
};

export default Logintest;
