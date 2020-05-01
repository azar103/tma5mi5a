import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import {recipes} from '../Helpers/data'

class MyCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            activeTab: 0
        }
    }
   _renderItem = ({item, index}) => {
       return(
        <View style={styles.slides}>

            <Image
              style={styles.img_style}
             source={{uri: item.photo_url}}
             />

           <Text style={styles.text}>{item.title}</Text>

        </View>
       )
   }
  render() {
    console.disableYellowBox = true;
      const {width: viewportwidth} =  Dimensions.get('screen')
      return(
          
        <View style={styles.main_container}>
         <Carousel
           ref={(c) => {this._carousel = c;}}
           data={recipes.slice(0, 3)}
           sliderWidth={viewportwidth}
           itemWidth={viewportwidth}
           slideStyle={{width: viewportwidth}}
           renderItem={this._renderItem}
           horizontal={true}
         />
     
       </View>  
      )
  }
}


const styles = StyleSheet.create({
    slides: {
        flex: 1,
        marginLeft: -22
    
    },
    img_style: {
        height: 300
    },
    main_container: {
        flex: 1,
        alignContent:'center',
        justifyContent:'center'
    },
    text: {
        position:"absolute", 
        top:250, 
        color:'white', 
        fontSize: 25,
        fontWeight:"bold",
        left:50,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
})



export default MyCarousel
