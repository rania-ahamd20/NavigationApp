/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({isDarkMode}) => {
  const navigation = useNavigation();
  const goToDetails = () => {
    navigation.navigate('Details');
  };

  const cardStyle = isDarkMode ? styles.darkCard : styles.lightCard;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <View style={styles.container}>
      <Card style={cardStyle}>
        <Card.Content style={styles.cardContent}>
          <TouchableOpacity style={styles.iconContainer} onPress={goToDetails}>
            <Icon name="user" size={50} style={styles.icon} />
            <Text style={textStyle}>About Rania</Text>
          </TouchableOpacity>
          <Button color="black" title="Go to Details" onPress={goToDetails} />
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
  },
  cardContent: {
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  lightCard: {
    backgroundColor: 'white',
  },
  darkCard: {
    backgroundColor: 'black',
  },
  lightText: {
    color: 'black',
    fontSize: 28,
  },
  darkText: {
    color: 'white',
    fontSize: 28,
  },
  icon: {
    color: 'black',
  },
});

export default HomeScreen;
