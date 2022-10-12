import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Import Component Child:
import ComponentChild from './ComponentChild'

const App = () => {
  return (
    <View style={styles.container}>
      <ComponentChild customName="NgUyEn" customColor= 'red'/>
      <ComponentChild customName="Nguyenn" customColor= 'blue'/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
})