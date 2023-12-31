import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import logo from "./assets/logo.png";

export default function App() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const enviar = () =>{
    console.log("email: ", email);
    console.log("senha: ", senha);

  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Image resizeMode="contain" style={styles.logo} source={logo}/>

      <Text style={styles.title}>Login</Text>

      <TextInput 
        style={styles.input}
        placeholder="Endereço de e-mail"
        value={email}
        keyboardType="email-address"
        onChangeText={(e)=>{setEmail(e)}}
      />

      <TextInput 
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(valor)=>{setSenha(valor)}}
        secureTextEntry={true}
      />

      {/* <Button 
        title='ENTRAR'
        onPress={()=>{}}
      /> */}

      <TouchableOpacity style={styles.button} onPress={()=>{enviar()}}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25
  },
  logo:  {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold" 
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    padding: 12,
    width: 300,
    backgroundColor: "#4accf0",
    alignItems: "center",
    borderRadius:5
  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
