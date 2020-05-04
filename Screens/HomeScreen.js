import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {categories, recipes} from '../Helpers/data'
import Category from '../Components/Category'
import Recipe from '../Components/Recipe'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import MyCarousel from '../Components/Carousel'
class HomeScreen extends React.Component {
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
      return(
          <ScrollView style={styles.main_container}>
             <MyCarousel />  
             <View style={{flex: 1, padding: 16}}>
              <View style={styles.trend_view}>
              
               <Text style={styles.text}>
                   Populaires
               </Text>
               <FlatList 
                   horizontal={true}
                   data={recipes.slice().sort((a, b) => b.likes - a.likes)}
                   renderItem={({item}) => 
                    <Recipe
                         recipe={item}
                         navigate={this._navigate}
                     />
                    }
                   keyExtractor={item => item.recipeId.toString()} 
               />
               </View>
               <View style={styles.categories_view}>
               <Text style={styles.text}>Catégories</Text>
               <FlatList 
                   horizontal={true}
                   data={categories}
                   renderItem={
                    ({item}) => 
                    <Category
                         category={item}
                     />
                    }
                   keyExtractor={item => item.id.toString()} 
               />
               </View> 
               <View style={styles.all_recipes_view}>
               <Text style={styles.text}>Récentes</Text>
               <FlatList 
                   horizontal={true}
                   data={recipes.slice(0, 5).reverse()}
                   renderItem={({item}) => 
                    <Recipe
                         recipe={item}
                         navigate={this._navigate}
                     />
                    }
                   keyExtractor={item => item.recipeId.toString()} 
               />
               </View>
               </View> 
          </ScrollView> 
      )
  }
  
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    text: {
        color: '#3A3739',
        fontSize: 30,
        fontWeight:'bold',
        marginLeft: 5,
        marginBottom: 5
    },
    trend_view: {
        flex: 1,
    },
    category_view: {
        flex: 1,
        marginTop: 10
    },
    all_recipes_view: {
        flex: 1,
        marginTop: 10
    }
})


export default HomeScreen

