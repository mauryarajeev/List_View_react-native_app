import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const NewNote = ({ onSave, onCancel }) => {
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  const handleSave = () => {
    if (noteText && noteTitle) {
      onSave(noteTitle, noteText);
    }
  };

  const handleUploadContent = () => {
    // Implement upload content logic here
  };

  const handleCreateVideo = () => {
    // Implement create video logic here
  };

  const handleRecordVoice = () => {
    // Implement record voice logic here
  };

  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="title"
        onChangeText={setNoteTitle}
        value={noteTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Start typing"
        onChangeText={setNoteText}
        value={noteText}
        multiline
      />
    
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={handleUploadContent}>
          <FontAwesome name="cloud-upload" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={handleCreateVideo}>
          <FontAwesome name="video-camera" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={handleRecordVoice}>
          <FontAwesome name="microphone" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop:0
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 0, // Removed border
    borderColor: 'transparent', // Removed border
    backgroundColor: '#f2f2f2', // Added background color
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop:5
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 300,
  },
  bottomButton: {
    backgroundColor: '#A9A9A9',
    padding: 7,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default NewNote;
