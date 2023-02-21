import { Text, TouchableOpacity } from "react-native";

export default function ButtonWhitoutBg({onPress,text}) {
  return (
    <TouchableOpacity onPress={onPress} className="h-8 w-72 text-center border-[#8D33E7] border-2 rounded-lg m-2">
      <Text className="text-center text-[#8D33E7] text-lg ">{text}</Text>
    </TouchableOpacity>
  );
}
