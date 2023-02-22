import { View, Text } from "react-native";
import ButtonApp from "../components/ButtonApp";
import { useState, useEffect } from "react";

export default function HomePage({ navigation }) {
  const [username, setUsername] = useState(null);

  useEffect(function () {
    async function getDataUsers() {
      try {
        let rta = await fetch("http://127.0.0.1:8000", {
          method: "GET",
        });
        let resJson = await rta.json();
        setUsername(resJson.groups);
        
      } catch (err) {
        console.log(err);
      }
    }
    getDataUsers();
  },[]);
  
  return (
    <View className="bg-indigo-300 h-full flex items-center">
      <ButtonApp
        text="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <ButtonApp
        text="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Text>Hola estoy </Text>
      <Text> haciendo fetch en: {username}</Text>
    </View>
  );
}
