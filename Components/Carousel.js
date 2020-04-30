import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { Card } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'
import {recipes} from '../Helpers/data'

class MyCarousel extends React.Component {
    constructor(props) {
        super(props)
    }
   _renderItem = ({item, index}) => {
       return(
        <View style={styles.slides}>

            <Image
              style={styles.img_style}
             source={{uri: item.photo_url}}
             />

        </View>
       )
   }
  render() {
      const {width, height} =  useWindowDimensions()
      return(
        <View style={styles.main_container}>
         <Carousel
           ref={(c) => {this._carousel = c;}}
           data={recipes}
           sliderWidth={width}
           itemWidth={height/4}
           renderItem={this._renderItem}
           horizontal={true}
         />
       </View>  
      )
  }
}


const styles = StyleSheet.create({
    slides: {
        flex: 1
    },
    img_style: {
        height: 200
    },
    main_container: {
        flex: 1,
        alignContent:'center',
        justifyContent:'center'
    }
})



export default MyCarousel
