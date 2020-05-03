import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { getRecipesByCategory } from '../Helpers/functions'
import { recipes } from '../Helpers/data'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'


class CategoryDetailScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return{
            headerTitle: navigation.state.params.categoryName
        }
    }    
    constructor(props) {
        super(props)
    }
    _navigate = (title, url, time, ingredients, categoryId, steps) => {
        this.props.navigation.navigate('RecipeDetailScreen', 
          {title:  title, 
           photo_url: url, 
           time: time,
           ingredients: ingredients,
           categoryId:  categoryId,
           steps: steps
        })
    }
  render() {
      const recipesByCategory = getRecipesByCategory(recipes, this.props.navigation.state.params.categoryId)
      return(
               <FlatList
                   data={recipesByCategory}
                   renderItem={
                    ({item}) => 
                    <TouchableOpacity 
                    style={styles.categoryItem}
                    onPress={() => this._navigate(
                        item.title,
                        item.photo_url,
                        item.time,
                        item.ingredients,
                        item.categoryId,
                        item.steps
                        )}
                    >
                    <Image
                    style={styles.img}
                     source={{uri: item.photo_url}}
                    />
                    <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>
                   }
                   keyExtractor={item => item.id}
               />
      )
  }
  
}

const styles= StyleSheet.create({
    img: {
        height: 300,
        
    },
    
    categoryItem: {
        margin: 5,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
	     width: 0,
	    height: 2,
      },
        shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,
    },
    text: {
        color: 'black',
        fontSize: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.40)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        fontWeight:"bold",
        alignSelf:'center'
    }
})


export default CategoryDetailScreen
