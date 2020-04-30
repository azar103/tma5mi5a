import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../Screens/HomeScreen";
import RecipeDetailScreen from "../Screens/RecipeDetailScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";
import NewRecipeScreen from "../Screens/NewRecipeScreen";
import FavoritesScreen from "../Screens/FavoritesScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const HomeStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Accueil',
        }
    },
    RecipeDetailScreen: {
        screen: RecipeDetailScreen,
        navigationOptions: {
            title: ''
        }
    }
})

const CategoriesStack = createStackNavigator({
    CategoriesScreen : {
        screen: CategoriesScreen,
        navigationOptions: {
            title: 'Categories'
        }
    }
})

const NewRecipeStack = createStackNavigator({
    NewRecipeScreen: {
        screen: NewRecipeScreen,
        navigationOptions: {
            title: 'Nouvelle Recette'
        }
    }
})

const FavoritesStack = createStackNavigator({
    FavoritesScreen: {
        screen: FavoritesScreen,
        navigationOptions: {
            title: 'Favoris'
        }
    },
    RecipeDetailScreen: {
        screen: RecipeDetailScreen,
        navigationOptions: {
            title: ''
        }
    }
})

const ProfileStack = createStackNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profil'
        }
    }
})

const bottomTabs = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Explorer',
            tabBarIcon: ({tintColor}) => (
            <Icon
                name="ios-planet"
                color={tintColor}
                size={25}
            />
            
            )   
        }
    },
    CategoriesScreen: {
        screen: CategoriesStack,
        navigationOptions: {
            title: 'Categories',
            tabBarIcon: ({tintColor}) => (
                <Icon
                   name="ios-albums"
                   color={tintColor}
                   size={25}
                />
            )
        }
    },
    NewRecipeScreen: {
        screen: NewRecipeStack,
        navigationOptions: {
            title: 'Nouveau',
            tabBarIcon: ({tintColor}) => (
                <Icon 
                   name="md-add-circle"
                   color={tintColor}
                   size={25}
                />
            )
        }
    },
    FaovoritesScreen: {
        screen: FavoritesStack,
        navigationOptions: {
            title: 'Favoris',
            tabBarIcon: ({tintColor}) => (
                <Icon 
                 name="ios-heart"
                 color={tintColor}
                 size={25}
                />
            )
        }
    },
    ProfileScreen: {
        screen: ProfileStack,
        navigationOptions: {
            title: 'Profil',
            tabBarIcon: ({tintColor}) => (
                <Icon 
                 name="md-contact"
                 color={tintColor}
                 size={25}
                />
            )
        }
    }
},
{
    tabBarOptions: {
        activeTintColor: '#37d67a',
        labelStyle: {
            fontWeight:"bold"
        }
       
    }
}

)


export default createAppContainer(bottomTabs)