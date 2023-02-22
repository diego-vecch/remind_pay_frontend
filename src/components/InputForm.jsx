import {TextInput} from 'react-native';
import {useState} from 'react'


export default function InputForm({placeh}) {
    const [first, setfirst] = useState("")
    return(
        <TextInput
          className="bg-violet-200 h-12 w-72 mx-6 border-2 mb-2 px-3 border-violet-300 focus:border-violet-700"
          placeholder={placeh}
          value={first}
          onChangeText={setfirst}
          autoCapitalize="none"
        ></TextInput>
    )
}