import { SafeAreaView } from "react-native";
import MainStack from "./src/routes/MainStack";

export default function App() {
  return (
    <SafeAreaView className='bg-indigo-800 h-full'>
      <MainStack />
    </SafeAreaView>
  );
}
