import { createStore } from "redux";
import toggleFavorite from "./Reducers/favoriteReducer";
import { AsyncStorage } from "react-native";
import { persistReducer } from "redux-persist";

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}


export default createStore(persistReducer(rootPersistConfig, toggleFavorite))