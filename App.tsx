import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function App() {
  function alert(arg0: string): void {
    throw new Error('Function not implemented.')
  }

  return (
    <View>
      <Text style={{fontSize:24}}>Ayan</Text>
      <Text style={{fontSize:24}}>Biswas</Text>
      <Button title='Press Here' color={'pink'}/>
     
    </View>
  )
} 