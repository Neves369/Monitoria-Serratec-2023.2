import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList} from "react-native";
import contatos from "./contatos.json"

const Contact = ({ name, phone }) => {
  return (
    <View style={styles.contact}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contatos.contatos)
  }, [])

  
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        ListEmptyComponent={()=><Text>Lista Vazia</Text>}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => <Contact key={item.nome} name={item.nome} phone={item.celular} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  contact: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  name: {
    fontSize: 20,
  },
  phone: {
    fontSize: 16,
  },
});

export default App;