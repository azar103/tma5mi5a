
export function getCountRecipesByCategory(arr, categoryId) {
    const numberOfRecipes =  arr.filter((item)=> item.categoryId === categoryId).length
    return numberOfRecipes 
}

export function getRecipesByCategory(arr, categoryId){
    const arrayFilterd = arr.filter((item)=> item.categoryId === categoryId)
    return arrayFilterd
}


export function getRecipesByTitle(arr, text) {
    const arrayFilterd = arr.filter((item)=> item.title === text)
    return arrayFilterd
}


