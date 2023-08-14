import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import NewNote from './NewNote';

const NotesFeed = () => {
  const [notes, setNotes] = useState([
    { id: '1', text: 'In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a songs text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum', createdAt: new Date().toISOString() },
    { id: '2', text: 'With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only', createdAt: new Date().toISOString() },
    { id: '3', text: 'In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a songs text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum', createdAt: new Date().toISOString() },
    { id: '4', text: 'With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only', createdAt: new Date().toISOString() },
  ]);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleNoteSave = (text) => {
    setNotes([...notes, { id: String(notes.length + 1), text, createdAt: new Date().toISOString() }]);
    setModalVisible(false);
  };

  const renderNote = ({ item }) => (
    <View style={styles.note}>
      <Text style={styles.noteText}>{item.text}</Text>
      <Text style={styles.noteDate}>{new Date(item.createdAt).toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderNote}
        contentContainerStyle={styles.notesList}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonLabel}>+ New</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide">
        <NewNote onSave={handleNoteSave} onCancel={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notesList: {
    paddingBottom: 80,
  },
  note: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  noteText: {
    flex: 1,
  },
  noteDate: {
    marginLeft: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NotesFeed;
