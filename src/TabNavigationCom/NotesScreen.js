import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import NotesFeed from './NotesFeed';
import NewNote from './NewNote';

const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Notes Screen</Text>
      <NotesFeed />
      {/* <NewNote /> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotesScreen;
