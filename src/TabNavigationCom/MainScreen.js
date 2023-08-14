import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MainScreen = () => {
  const [focused, setFocused] = useState('week');
  const [weekCount, setWeekCount] = useState(0);
  const [dayCount, setDayCount] = useState(0);

  const handleIncrement = () => {
    if (focused === 'week') {
      setWeekCount(weekCount + 1);
    } else {
      setDayCount(dayCount + 1);
    }
  };

  const handleReset = () => {
    if (focused === 'week') {
      setWeekCount(0);
    } else {
      setDayCount(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.countSection}>
        <TouchableOpacity
          style={[styles.countView, focused === 'week' && styles.selectedCountView]}
          onPress={() => setFocused('week')}
        >
          <Text style={styles.countText}>{weekCount.toString().padStart(2, '0')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.countView, focused === 'days' && styles.selectedCountView]}
          onPress={() => setFocused('days')}
        >
          <Text style={styles.countText}>{dayCount.toString().padStart(2, '0')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.countLabels}>
        <Text style={styles.labelText}>Week</Text>
        <Text style={styles.labelText}>Day</Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.addButton} onPress={handleReset}>
          <Text style={styles.addButtonLabel}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleIncrement}>
          <Text style={styles.addButtonLabel}>+1</Text>
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
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  countSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginRight: 20,
  },
  countView: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 20,
  },
  selectedCountView: {
    backgroundColor: '#2ecc71', // Change background color for the selected count view
  },
  countText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  countLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 45,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  addButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainScreen;
