import { Text, TouchableOpacity } from "react-native";

export default function ButtonApp({onPress,text}) {
  return (
    <TouchableOpacity onPress={onPress} className="bg-[#8D33E7] h-8 w-56 text-center border-violet-900 rounded-lg m-8">
      <Text className="text-center text-violet-50 text-xl ">{text}</Text>
    </TouchableOpacity>
  );
}
