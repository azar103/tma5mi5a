import React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'

const {width, image} = Dimensions.get('window')

const CarouselItem = ({item}) => {
    return(
        <View style={styles.cardView}>
            <Image style={styles.image}/>
               <View style={styles.text}><Text style={styles.itemTitle}>{item.title}</Text></View>
           </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width-20,
        height: height/4,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity:0.5,
        shadowRadius: 3,
        elevation: 5
    },
    text: {
        position:"absolute",
        bottom: 10,
        margin: 10,
        left: 5
    },
    image: {
        width: width-20,
        height: height/4,
        borderRadius: 10

    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowOffset:{width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5
    }
})