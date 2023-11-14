import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image} from "react-native";



const  Person = ({route, navigation}) => {


  const [person, setPerson] = useState(route.params)
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.photo} source={{uri : person.photo}}/>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.phone}>{person.phone}</Text>
      </View>

      <View style={styles.body}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 30
  },
  header: {
    height: 300,
    padding: 10,
    borderRadius: 15,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#ccc",
  },
  photo:{
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red"
  },
  name: {
    fontSize: 20,
    fontWeight: "bold"
  },
  phone: {
    fontSize: 16,
  },
  body: {
    height: 350,
    padding: 10,
    borderRadius: 15,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#ccc",
  },
});

export default Person;