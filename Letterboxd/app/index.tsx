import { StyleSheet, Text, View } from "react-native";
import {Feather} from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container }
    >
      <View style={styles.barraSuperior}>
      <Feather  name="settings" size={40} color="#ffff"/>

      </View>


      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#181B20",
  },

  barraSuperior:{
    backgroundColor:"#000000",
    height:85,
    justifyContent:"center",
    paddingHorizontal:10,
  },





});