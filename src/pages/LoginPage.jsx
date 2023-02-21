import { Text, TextInput, View, SafeAreaView } from "react-native";
import ButtonApp from "../components/ButtonApp";
import SvgComponent from "../components/Icons/LogoRemindPay";
import {useState} from 'react';
import ButtonWhioutBg from '../components/ButtonWhitoutBg'

export default function LoginForm({ navigation }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View className="bg-indigo-300 h-full flex items-center">
      <Text
        className="bg-indigo-300 text-violet-700 h-10 text-2xl mt-20 w-72 float-left"
      >
        Email or Username
      </Text>
      <SafeAreaView>
        <TextInput
          className="bg-violet-200 h-12 w-72 mx-6 border-2 mb-2 px-3 border-violet-300 focus:border-violet-700"
          placeholder="ex: Annie"value={user}
          onChangeText={setUser}
          autoCapitalize="none"
        />
      </SafeAreaView>
      <Text className="bg-indigo-300 text-violet-700 h-11 text-2xl mt-6 w-72 float-left">
        Password
      </Text>
      <SafeAreaView>
        <TextInput
          className="bg-violet-200 h-12 w-72 mx-6 border-2 border-violet-300 focus:border-violet-700 mb-2 px-3"
          secureTextEntry={true}
          placeholder="ex: Annie.1234"
          onChangeText={setPassword}
          autoCapitalize="none"
        />
      </SafeAreaView>
      <ButtonApp
        text="Login"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      /><ButtonWhioutBg text="Forgot your password?"/>
      <SvgComponent className="mt-12" />
    </View>
  );
}
