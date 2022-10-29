// code your solution here
function myCallback(element, index, array){
    return (element.result === 'W')
}



function superbowlWin(array){
    const elementFound = array.find(myCallback)
    return !!elementFound ? elementFound.year : undefined

}