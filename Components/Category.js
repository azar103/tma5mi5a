import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

class Category extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
      
      const { category } = this.props
      console.log(category.photo_url)
      return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", margin: 5 }}>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
          <View>
            <Image
              source={{uri: category.photo_url}}
              style={{
                height: 135,
                width: 250,
                position:"relative"

              }}
            />
            <Text style={styles.name}>{category.name}</Text>
          </View>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
    name: {
        position:"absolute", 
        top:50, 
        color:'white', 
        fontSize: 25,
        fontWeight:"bold",
        left:50,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
})




export default Category
