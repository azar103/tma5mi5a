import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacit, BackHandler } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import {categories} from '../Helpers/data'




class RecipeDetailScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            isSelected: false
        }
    }

    setSelection = () => {
            this.setState({
                isSelected: !this.state.isSelected
            })
    }
  render() {
      const {title, photo_url, categoryId, time, ingredients} = this.props.navigation.state.params
      return(
          <ScrollView style={styles.main_container}>
               <Image 
                source={{uri: photo_url}}
                style={styles.img_style}
               />
             <View style={styles.content}>
               <View style={styles.header}>
               <Text style={styles.title_style}>{title}</Text>
               <View style={styles.icons_container}>
                    <View style={styles.label_icon}>
                         <Icon 
                           name="folder"
                           color="#37d67a"
                         />
                         <Text style={styles.label}>{categories[categoryId].name}</Text>
                    </View>
                    <View style={styles.label_icon}>
                         <Icon 
                           name="alarm"
                           color="#37d67a"
                         />
                         <Text style={styles.label}>{time+" MIN"}</Text>
                    </View>
                   
                </View>                   
              
             
               </View>
               <Text style={{color: 'gray', fontSize:30, fontWeight:"bold"}}>Ingredients</Text>
               <View style={styles.ingredients}>
                    { ingredients.map(
                           (ingredient, index) => 
                           <Text>{ingredient.name}</Text>
                       )}
                 </View>
             
               </View> 
          </ScrollView> 
      )
  }
  
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor:'#F1F0F1'
    },
    img_style: {
        height: 250
    },
    title_style: {
        fontSize: 30,
        fontWeight:"bold"
    },
    content: {
        padding: 20
    },
    icons_container:{
        flex: 1,
        flexDirection:'row',
    
    },
    label_icon: {

        flexDirection: 'row',
        marginTop: 5,
        marginLeft:5
    },
    label: {
        color: '#37d67a',
        fontSize: 18,
        marginRight: 30
    },
    header: {
        backgroundColor:'white',
        padding: 10,
        marginLeft: -20,
        marginRight: -20,
        marginTop:-20,
        marginBottom:5
    },
    ingredients: {
        flex: 1,
        flexDirection:'column',
        backgroundColor:'white',
        marginLeft: -20,
        marginRight: -20,  
    },
    checkbox_container: {
        flex: 1,
        marginBottom:20,
        flexDirection:'row',
        marginLeft: 10,
        padding:5
    },
    label_checkbox: {
        margin: 8
    }
})


export default RecipeDetailScreen
