// Algorithm
// check how many parameters are actually defined
    // if(startIndex === undefined and deleteCount === undefined)
        // we only have an array
        // create a new array and fill it with all 'yerr'
        // Array.prototype.fill()
    
    // if(deleteCount === undefined)
        // replace the elements starting at startIndex until the end
        // .slice() .splice()

    // else
        // replace the elements starting at startIndex
        // but only replace deleteCount number of elements
        // .slice() .splice()


function replaceWithYerr(array, startIndex = 0, deleteCount = array.length){
    let newArray = [...array]
   
    for(let i = startIndex; i < deleteCount + startIndex; i++) {
        newArray[i] = 'yerr'
    }
    return newArray;
}




