import { Text, TextInput, View } from "react-native";
import ButtonApp from "../components/ButtonApp";

export default function LoginForm({ navigation }) {
  return (
    <View className="bg-indigo-300 h-full flex items-center">
      <Text
        className="bg-indigo-300 text-violet-700 h-10 text-xl"
        autoComplete="off"
      >
        Email or Username
      </Text>
      <TextInput
        className="bg-violet-200 h-8 w-56 mx-6 border-2 border-purple-100"
        placeholder="ex: Annie"
      />
      <Text className="bg-indigo-300 text-violet-700 h-10 text-xl">
        Password
      </Text>
      <TextInput
        className="bg-violet-200 h-8 w-56 mx-6 border-2 border-purple-100"
        secureTextEntry={true}
        placeholder="ex: Annie"
      />
      <ButtonApp
        text="Login"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
    </View>
  );
}
