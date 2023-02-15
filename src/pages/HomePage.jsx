import {Button, Text, View} from 'react-native'
import ButtonApp from '../components/ButtonApp'

export default function HomePage({navigation}) {
    return(
        <View className="bg-indigo-300 h-full flex items-center">
            <ButtonApp text='Login'
            onPress={()=>{navigation.navigate('Login')}}/>
        </View>
    )
    
}