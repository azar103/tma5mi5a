import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-elements'

class Recipe extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
    const  {recipe} = this.props
      return(
          <View style={{flex: 1, marginLeft: 7, marginBottom:5}}>
               <Image 
                source={{uri: recipe.photo_url}}
                style={{width: 150, height: 100}}
               />
               <Text style={{marginTop:10}}>{recipe.title}</Text>
          </View>
      )
  }
}


export default Recipe
