const initialState={ favoriteRecipes: [] }
function toggleFavorite( state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteIndex = state.favoriteRecipes.findIndex((item) => item.id === action.value.id)
            if(favoriteIndex !== -1) {
                nextState = {
                    ...state,
                    favoriteRecipes: state.favoriteRecipes.filter((item, index) => index !== favoriteIndex)
                }
            } else {
                nextState = {
                    ...state, 
                    favoriteRecipes: [...state.favoriteRecipes, action.value]
                }
            }
            return nextState || state;
    
        default:
            return state;
    }

}


export default toggleFavorite