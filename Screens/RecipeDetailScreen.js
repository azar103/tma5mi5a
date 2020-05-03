import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacit, BackHandler } from 'react-native'
import {CheckBox} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import {IconFood} from 'react-native-vector-icons/MaterialCommunityIcons'
import HeartIcon from "react-native-vector-icons/Ionicons";
import FoodIcon from "react-native-vector-icons/Ionicons";
import {categories} from '../Helpers/data'




class RecipeDetailScreen extends React.Component {
    static navigationOptions = ({navigation}) =>{
       return {
           headerTitle: navigation.state.params.title,
           headerRight: () => <HeartIcon
            name="ios-heart-empty"
            size={25}
            style={{marginRight: 10}}
           />
       }
    }
    constructor(props) {
        super(props)
        this.state = {
            checkboxesIngredients: this.props.navigation.state.params.ingredients,
            checkboxesSteps: this.props.navigation.state.params.steps
        }
        
    }

    toggleIngredients = (id) => {
        const changedCheckbox = this.state.checkboxesIngredients.find((cb) => cb.id === id);

       changedCheckbox.isChecked = !changedCheckbox.isChecked;

        const checkboxesIngredients = Object.assign(this.state.checkboxesIngredients, changedCheckbox);

         this.setState({ checkboxesIngredients });
    }

    toggleSteps = (id) => {
        const changedCheckbox = this.state.checkboxesSteps.find((cb) => cb.id === id);

       changedCheckbox.isChecked = !changedCheckbox.isChecked;

        const checkboxesSteps = Object.assign(this.state.checkboxesSteps, changedCheckbox);

         this.setState({ checkboxesSteps });
    }





  render() {
      const {title, photo_url, categoryId, time, steps} = this.props.navigation.state.params
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
                         <FoodIcon
                           name="md-pizza"
                           color="#37d67a"
                           size={25}
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
               <Text style={styles.section_title}>Ingrédients</Text>  
               <View style={styles.block}>
              {this.state.checkboxesIngredients.length > 0 && this.state.checkboxesIngredients.map( (cb) => 
              <View style={{flexDirection: 'row', marginBottom: 20}}>
              <CheckBox 
                key={cb.id}
                checked={cb.isChecked}
                onPress={() => this.toggleIngredients(cb.id)}
                color={"#37d67a"}
                style={{marginTop:6}}
              />     
              <Text style={{marginLeft: 18, fontSize: 20, marginLeft: 50}}>{cb.quantity + " " + cb.name}</Text>
          
             
              </View>
              )} 
              </View>

<Text style={styles.section_title}>Préparation</Text>  
           <View style={[styles.block, {marginBottom: -18 }]}>
              {this.state.checkboxesSteps.length > 0 && this.state.checkboxesSteps.map( (cb, index) => 
    
         <View style={{flexDirection: 'row', marginBottom: 20}}>
             
              <CheckBox 
                key={cb.id}
                checked={cb.isChecked}
                onPress={() => this.toggleSteps(cb.id)}
                color={"#37d67a"}
                style={{marginTop:6}}
              />
              <View style={{flexDirection:'column'}}>
              <Text style={{fontWeight:"bold", marginLeft:50, fontSize: 20 }}>Etape{ index+1}</Text>    
              <Text style={{marginLeft: 50, fontSize: 20, marginRight: 5}}>{cb.description}</Text>
             </View>
              </View>
         
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
        fontWeight:"bold",
        marginLeft:5
  
    },
    content: {
        padding: 20
    },
    icons_container:{
        flex: 1,
        flexDirection:'row',
        marginLeft:2
    
    },
    label_icon: {

        flexDirection: 'row',
        marginTop: 5,
        marginLeft:5
    },
    label: {
        color: '#37d67a',
        fontSize: 18,
        marginRight: 30,

    },
    header: {
        backgroundColor:'white',
        padding: 10,
        marginLeft: -20,
        marginRight: -20,
        marginTop:-20,
        marginBottom:10
    },
    block: {
        backgroundColor:'white',
        padding: 13,
        marginLeft: -20,
        marginRight: -20,
        marginTop:10,

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
    },
    section_title: {
        color: 'gray', 
        fontSize:30, 
        fontWeight:"bold", 
        marginTop:5, 
        marginBottom:5
    },
    line_style: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin:10
    }
})


export default RecipeDetailScreen
