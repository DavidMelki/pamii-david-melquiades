import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Index() {
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState(false);

  function validar() {
    setErro(texto.length < 6);
  }

  return (
    <View style={styles.container}>
      <Text>Digite pelo menos 6 números</Text>

      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite aqui"
      />

      {erro && (
        <Text style={styles.erro}>
          O texto deve ter pelo menos 6 números seu bobinho!!!
        </Text>
      )}

      <Button title="Enviar" onPress={validar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff"
  },
  input: {
    borderWidth: 1,
    borderColor: "#0096fa",
    padding: 10,
    marginVertical: 10,
    backgroundColor:"#a6cfff"
  },
  erro: {
    color: "red",
    marginBottom: 10,
  },
});