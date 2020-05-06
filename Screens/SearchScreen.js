import React from 'react'
import { View, TextInput, StyleSheet, ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { getRecipesByTitle } from '../Helpers/functions'
import { FlatList } from 'react-native-gesture-handler'
import {recipes} from '../Helpers/data'
import { connect } from 'react-redux'


class SearchScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            recipes: []
        }
        this.searchedInput = ''
    }
   
    _changeTextInputHolder = (text) => {
        this.searchedInput = text
    }
  componentDidMount() {
      this._loadRecipes()
  }  
  _loadRecipes = () => {
      if(this.searchedInput.length > 0){
        const recipesFiltered = recipes.filter((item) => {
            return item.title.toLowerCase().indexOf(this.searchedInput.toLowerCase()) !== -1
        })

        this.setState({
            recipes: recipesFiltered
        })
      }else {
          this.setState({
              recipes: []
          })
      }
      
  }  
  _displayFavoriteIcon = (id) => {
    if(this.props.favoriteRecipes.findIndex(item => item.recipeId === id) !== -1){
        return(
            <Icon 
             name="ios-heart"
             color="#37d67a"
             />
        )
    }
  }
  /*_displayLoading(){
    
     if(filteredRecipes.length > 0) {
         return(
             <ActivityIndicator 
               size="large"
               style={styles.loading_container}
             />
         )
     }
  }*/
  _displayRecipes(){

    if(this.state.recipes.length > 0) {
        return(
            <FlatList
            data={this.state.recipes}
            extraData={this.state.recipes}
            style={{marginTop:10}}
            renderItem={
             ({item}) => 
             <TouchableOpacity
             style={styles.RecipeItem}
             onPress={() => this._navigate(
                 item.recipeId,
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
             {this._displayFavoriteIcon(item.recipeId)}
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


  

  render() {
    console.log(this.props.favoriteRecipes)

      return(
          <View style={styles.main_container}>
               <TextInput
                 style={styles.input}
                 placeholder="cherchez des recettes..."   
                 value={this.state.searchedInput}
                 onChangeText={(text) => this._changeTextInputHolder(text) }
                 onSubmitEditing={() => this._loadRecipes()}
                 
               />
               <Icon 
               style={styles.icon}
                name="md-search"
                size={25}
                color="#2EC269"
               />
               
          {this._displayRecipes()}               
          </View> 
      )
  }
  
}

const styles= StyleSheet.create({
    main_container: {
        flex: 1,
        
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 0,
        height: 40,
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    view_input: {
        flexDirection:'row',
        position:"relative"
    },
    icon: {
        position:"absolute",
        top: 20,
        left: 30
    },
    placeholderStyle: {
        marginLeft: 10
    },
    loading_container: {
        position:"absolute",
        top: 100,
        left: 0,
        right: 9,
        bottom: 0
    },
    img: {
        height: 300,
        marginLeft: 6,
        marginRight:5,
        position:"relative"
        
    },
    RecipeItem: {
        marginTop: 10,
        marginLeft:15,
        marginRight:15,
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
export default connect(mapStateToProps)(SearchScreen)

