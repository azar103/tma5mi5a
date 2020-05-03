import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {categories, recipes} from '../Helpers/data'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { getCountRecipesByCategory } from '../Helpers/functions'
class CategoriesScreen extends React.Component {
    constructor(props) {
        super(props)
    }

  _navigate = (categoryId, categoryName) => {
      this.props.navigation.navigate("CategoryDetailScreen", 
        {categoryId: categoryId, categoryName: categoryName})
  }  
  render() {
      return(
               <FlatList
                 data={categories}
                 renderItem={ ({item}) => 
                 <TouchableOpacity
                   activeOpacity={0.8}
                  onPress={() => this._navigate(item.id, item.name)}
                 >
                     <Image 
                      source={{uri: item.photo_url}}
                      style={styles.image}
                     />
                     <View style={styles.child}>
                     </View>
                    <View style={{ 
                         position:"absolute",
                         top: 154,
                         left: 120,
                         justifyContent:'center',
                         alignItems:'center',
                         backgroundColor:'rgba(0,0,0, .3)',
                         height:65,         
                         }}>
                   <Text style={styles.title}>{item.name}</Text>
               {getCountRecipesByCategory(recipes,item.id) === 1 
                ? <Text style={styles.count_recipes}>1 recette</Text>
                :
                <Text style={styles.count_recipes}>{getCountRecipesByCategory(recipes,item.id)} recettes</Text>
            }  
                   </View> 
                 </TouchableOpacity>}
                keyExtractor={item => item.id.toString() }
               />
      )
  }
  
}

const styles = StyleSheet.create({
    image: {
        height:300,
        position:"relative",
        margin:5
    },
    title: {
       color: 'white',
       fontSize: 30,
       textShadowColor: 'rgba(0, 0, 0, 0.75)',
       textShadowOffset: {width: -1, height: 1},
       textShadowRadius: 10,
       fontWeight:"bold",
    },
    child: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,.2)'
    },
    count_recipes: {
           color: 'white',
           fontWeight:'bold',
           position:"absolute",
           left: 3,
           top: 43,
           fontSize: 16
          
    }
})

export default CategoriesScreen
