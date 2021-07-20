// Disclaimer:  The real filter and map methods are better written than my examples, but the functionality
// is basically the same.

// This is basically what happens inside array.filter(checkMethod)
// the checkMethod argument must be a function which takes an element of the array and optionally an index
// i.e. (element, index) => true/false
function filter(array, checkMethod){
    let result = []; //the result is a different array
    for(let i = 0; i < array.length; i++) //it loops through every element by its index
        if(checkMethod(array[i], i))  //we use the method supplied in the parameter to determine if we keep the element
            result.push(array[i]); //add the desired elements to the resulting array
    return result;  //return the new array with filtered elements
}


// similar can be said for the map function:
function map(array, mappingMethod)
{
    let result = [];
    foreach(element in array)
        result.push(mappingMethod(element));
    return result;
}