import { View, Text } from "react-native";
import { useState } from "react";
import InputForm from "../components/InputForm";
import ButtonApp from "../components/ButtonApp";
import SvgComponent from "../components/Icons/LogoRemindPay";

export default function RegisterPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className="bg-indigo-300 h-full flex items-center">
      <Text className="bg-indigo-300 text-violet-700 h-10 text-2xl mt-20 w-72 float-left">
        Email
      </Text>
      <InputForm placeh="ex: annie@gmai..."/>
      <Text className="bg-indigo-300 text-violet-700 h-11 text-2xl mt-6 w-72 float-left">
        Password
      </Text>
      <InputForm placeh="ex: Annie.1234"/>
      <ButtonApp text="Register" onPress={""} />
      <SvgComponent className="mt-12" />
    </View>
  );
}
