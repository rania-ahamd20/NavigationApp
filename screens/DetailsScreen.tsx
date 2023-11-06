/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({ isDarkMode }) => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate('Home');
  };

  const cardStyle = isDarkMode ? styles.darkCard : styles.lightCard;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <View style={styles.container}>
      <Card style={cardStyle}>
        <Card.Content>
          <Icon name="laptop-mac" size={100} style={styles.icon} />
          <Text style={styles.title}>Professional Summary</Text>
          <Text style={textStyle}>
            Determined and knowledgeable software developer who can think
            outside the box. A new graduate who enjoys working with all types of
            personalities. Dependable, reliable, and has a spirit of leadership.
            Can handle multiple tasks, so organized and a person who cares about
            time management as well, honest, hard-working, and flexible.
          </Text>
          <Button color="black" title="Go back" onPress={goToHome} />
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  lightCard: {
    width: '80%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  darkCard: {
    width: '80%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  lightText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  darkText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
  },
  icon: {
    alignSelf: 'center',
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
});

export default DetailsScreen;
