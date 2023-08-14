import React from 'react';
import { View, TextInput, Button, StyleSheet,TouchableOpacity,Text } from 'react-native';

const LoginScreen = ({ navigation, onLogin }) => {
  const handleLogin = () => {
    // Perform actual login logic here
    onLogin(); // Call this when login is successful
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  button: {
    width: '80%', // Set the button width to 80% of the container
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;




