import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComponentChild = (props) => {
  return (
    <View>
      <Text style={{color: props.customColor, fontSize:30}}>
        {/* My name is: Nguyen */}
        My name is: {props.customName}
      </Text>
    </View>
  )
}

export default ComponentChild

const styles = StyleSheet.create({})