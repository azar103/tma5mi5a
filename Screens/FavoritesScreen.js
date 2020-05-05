import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { View } from 'native-base'


class FavoritesScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    _navigate = (id, title, url, time, ingredients, categoryId, steps) => {
        this.props.navigation.navigate('RecipeDetailScreen', 
          {
           id: id,   
           title:  title, 
           photo_url: url, 
           time: time,
           ingredients: ingredients,
           categoryId:  categoryId,
           steps: steps
        })
    }  
  render() {

if(this.props.favoriteRecipes.length > 0) {

    return(
        <FlatList
        data={this.props.favoriteRecipes}
        extraData={this.props.favoriteRecipes}
        renderItem={
         ({item}) => 
         <TouchableOpacity 
         style={styles.favoriteRecipeItem}
         onPress={() => this._navigate(
             item.id,
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
} else {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image 
           source={require('../img/norecipesfound.png')}
           style={{width: 100, height: 100}}
        />
        <Text>No recipes found</Text>
    </View>
    )
}
     
    
  }
  
}
const styles= StyleSheet.create({
    img: {
        height: 300,
        marginLeft: 6,
        marginRight:5
        
    },
    favoriteRecipeItem: {
        margin: 5,
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
	     width: 1,
        height: 2,
        flex: 1
      },
        shadowOpacity: 0.8,
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

const mapStateToProps = ({favoriteRecipes}) => {
    return { favoriteRecipes }
}

export default connect(mapStateToProps)(FavoritesScreen)
