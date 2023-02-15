import { Text, TextInput, View } from "react-native";
export default function LoginForm() {
  return (
    <View className="h-28">
      <Text className="text-amber-400 text-3xl">Login</Text>
      <TextInput defaultValue="ex: Annie" />
    </View>
  );
}
