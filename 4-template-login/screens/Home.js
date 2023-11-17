import { useState, useContext } from 'react';
import AuthContext from '../context/auth';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

  const { user, signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Title title={`${user.email}`}/>
      </Card>

      <Card>
        <Button icon="camera" mode="contained" onPress={() =>{signOut()}}>
          sair
        </Button>  
      </Card>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 50,
    gap: 20
  },
});
