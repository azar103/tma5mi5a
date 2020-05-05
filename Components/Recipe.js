import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {categories} from '../Helpers/data'
class Recipe extends React.Component {
    constructor(props) {
        super(props)
    }
  
  render() {
    const  {recipe, navigate} = this.props
    console.log(recipe.categoryId)
  
      return(
          <TouchableOpacity 
          style={{flex: 1, marginLeft: 7, marginBottom:5}}
          onPress={()=> navigate(
                                recipe.recipeId,
                                recipe.title, 
                                recipe.photo_url, 
                                recipe.time, 
                                recipe.ingredients,
                                recipe.categoryId,
                                recipe.steps                            
                                )}
          >
               <Image 
                source={{uri: recipe.photo_url}}
                style={{width: 150, height: 100, borderRadius: 20}}
               />
               <Text style={{marginTop:10}}>{recipe.title}</Text>
          </TouchableOpacity>
      )
  }
}


export default Recipe
