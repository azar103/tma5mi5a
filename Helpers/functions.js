
export function getCountRecipesByCategory(arr, categoryId) {
    const numberOfRecipes =  arr.filter((item)=> item.categoryId === categoryId).length
    return numberOfRecipes 
}

export function getRecipesByCategory(arr, categoryId){
    const arrayFilterd = arr.filter((item)=> item.categoryId === categoryId)
    return arrayFilterd
}