/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, DataTable } from 'react-native-paper';

const ProfileScreen = () => {
  return (
  <View>
    <View style={styles.container}>
      <Avatar.Image
        size={100}
        source={require('NavigationApp/Images/Ran.png')}
      />
      <Text style={styles.name} >Rania Mdardas</Text>
      </View>
      <Card>
        <Card.Content>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>Age</DataTable.Cell>
              <DataTable.Cell>23</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Location</DataTable.Cell>
              <DataTable.Cell>Irbid</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Major</DataTable.Cell>
              <DataTable.Cell>Computer Engineering</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Experience</DataTable.Cell>
              <DataTable.Cell>FullStack - ML</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding :40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name:{fontSize:28 , color:'maroon'},
});

export default ProfileScreen;
