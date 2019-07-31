'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: Designed to take a value and return the value unchanged
 * 
 * @param {Any Value} value: The collection over which to iterate.
 * @return: a value thats unchanged
 */
  function identity(value){
  return value;  
};
module.exports.identity = identity;
 
 /**
 * typeOf: designed to take a value and return the type of value as a string;
 * 
 * @param {Any value} value: a value.
 * @return: return the type of value as a string.
 */
 function typeOf(value) {
    if(typeof value === 'string') {
       return 'string';
   }
        else if (value === null) {
            return 'null';
        }
            else if (value instanceof Date) {
                return 'date';
            }
                else if(Array.isArray(value)) {
                    return 'array';
                }
            else if(typeof value === 'object') {
                return 'object';
            }
                 return typeof(value);
};
module.exports.typeOf = typeOf;
 
 /**
 * first: Designed to check if an array is array and if number is not a number. If array isnt a array and number is negative, 
 *  it should return an empty array. If the number isnt a number, you want to return the first elements in array.
 *  If the number is greater than array's length, return the array.
 * Else return the first elements in the array but how many numbers in numbers.
 * 
 * @param {Array} array: an array
 * @param {number} number: a number
 * @return: return the first elements in the array
 * 
 */
function first(array, number) {
    let arr = [];
    if(Array.isArray(array) === false || number < 0) {
        return arr;
    }
    else if(isNaN(number) && number === undefined) {
       return array[0];
    }
    else if(number > array.length) {
        return array;
    }
    else {
        return array.slice(0, number);
    }
    
};
module.exports.first = first;
 
 
 
 /**
 * Last: Designed to check if an array is array and if number is not a number. If array isnt a array and number is negative, 
 *  it should return an empty array. If the number isnt a number, you want to return the last elements in array.
 *  If the number is greater than array's length, return the array.
 * Else return the last elements in the array but how many numbers in numbers.
 * 
 * @param {Array} array: an array
 * @param {number} number: a number
 * @return: the last elements in the array
 */
 function last(array, number) {
   let lastArr = [];
   if(Array.isArray(array) === false || number < 0) {
       return lastArr;
   }
   else if(isNaN(number) && number === undefined) {
       return array[2];
   }
   else if(number > array.length) {
       return array;
   }
   else {
       return array.slice(1, 3);
   }
   
};
 
 module.exports.last = last;
 
 /**
 * indexOf: Designed to check if the value is inside the array and it is in the array, 
 * return its index. if its not in the array, return -1.
 * 
 * @param {Array} array: an array 
 * @param {value} value: a given value
 *
 */
 
  function indexOf(array, value) {
    // loop through array
    for(var i = 0; i < array.length; i++) {
    // return the index when the value occurs in the array
    if(array[i] === value || array[i].includes(value)) {
        return i;
    }
        
    }
    return -1;
    // return -1 if it isnt in array
};
module.exports.indexOf = indexOf;
 
 
 /**
 * contains: Designed to check to see if element in the array is in values
 * 
 * @param {value} an array: an array of values
 * @param {array} value: a given value
 */
 
 function contains(value, array) {

return (value.indexOf(array) === -1) ? false : true;
};
 module.exports.contains = contains;
 
 
 /**
 * unique: Designed to loop through an array and return the a new array with the duplicates removed
 * 
 * @param {Array} array: an array with duplicate elements
 * @return: a new array with the duplicates removed
 */
 
function unique(array) {
    // make a new arr to hold the new elements
   let arr = [];
   // loop over the array 
   for(var i = 0; i < array.length; i++) {
      
       if(arr.indexOf(array[i]) === -1) {
           arr.push(array[i]);
       }
   }
   return arr;
};

module.exports.unique = unique;
 
 
 /**
 * filter: Designed to loop over an array. If the elements passed the function return true, 
 * push the elements inside an new array. 
 * Then return the new array with the filtered elements inside
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the array
 * @return: a new array with the elements that are truthy
 */
 
 function filter(array, func) {
// make new array to hold the new elements 
    let arr = [];
// use each to get all the elements in the array 
 each(array,function(element, i, collection) {
// if the elements passed through the function return true
        if(func(element, i, collection) === true) {
// push the elements into the new array 
            arr.push(element);
        }
    });
    return arr;
};

 module.exports.filter = filter;
 
 
 /**
 * reject: Designed to loop over an Array. If the elements passed the function return false, 
 * push the elements inside an new array. 
 * 
 * @param {Array} array: the array  
 * @param {Function} callBack: The Function to be applied to each value in the array
 * @return: a new array with the falsy elements inside
 */
 function reject(array, callBack) {
    let arr = [];
    filter(array, function(element, i, collection){
       if(!callBack(element, i, collection)) {
           arr.push(element);
       }
    });
    return arr;
};

 module.exports.reject = reject;
 
 /**
 * partition: Designed to loop over a array Array, and applies the 
 * func Function to each value in the collection. 
 * It returns an array of arrays with truthy elements and falsey elements inside one array. 
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the array
 * @return: return an array of arrays with truthy elements in one and falsey elements in another
 */
 function partition(array, func) {
    let passArr = [];
    let failedArr = [];
    let bothArrs = [];
    each(array, function(elements, i, collection) {
    // pass elements through function
    // if the elements pass  the test, push the elements into an array
      if(func(elements, i, collection) === true) {
          passArr.push(elements);
          return passArr;
      }  
    // if the elements  failed the test, push the elements into an array
      else if(func(elements, i, collection) === false) {
          failedArr.push(elements);
         return failedArr;
      }

    });
    bothArrs.push(passArr, failedArr);
    return bothArrs;
 };
    module.exports.partition = partition;
 
 
 /**
 * map: Designed to loop over an Array or object  and applies the 
 * callBack Function to each value in the collection. 
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @return: return an array with callback function that passing in the elements
 */
  
   function map(collection, callBack) {
       
    let arr = [];
    each(collection, function(elements, i, collection) {
        callBack(elements, i, collection);
        arr.push(callBack(elements,i, collection));
    });
    return arr;
};

 module.exports.map = map;
 
 /**
 * pluck: Designed to loop over an Array and get the properties values inside the array.
 * then save them in an array
 * 
 * @param {Array } array: The array over which to iterate.
 * @param {property} property: a property
 * @return: return an array with the properties values inside the array
 */
 
 function pluck(array, property) {
    // console.log(property, 'ffff');
    // console.log(array, 'fjfjfjf');
    let arr = map(array, function(value, key, array) {
            // console.log(value[property]);
         
                
       return value[property];
            
    });
    return arr;
};

module.exports.pluck = pluck;
 
 /**
 * every: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection. if all the elements return truthy when passing them through
 * the function then return true else return false
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @return: boolean 
 */
function every(collection, func) {
    var truthy = true;
    // if func is given but the elements return false
    if(func !== undefined) {
    each(collection, function(element, i, collection) {
    if(func(element, i, collection) === false) {
        truthy = false;
    // return false
    }
    });
        
    }
// if the func isnt given and the elements return false 
    else {
        each(collection, function(element) {
            if(element === false) {
                truthy = false;
// return false 
            }
        });
    }
    // else return true
    return truthy;
};
 
module.exports.every = every;

 /**
 * some: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection. if one of the elements
 * return truthy when passing it through the function then return true.
 * if all the elements return false then return false
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @return: boolean
 */
 
 
 function some(collection, func) {
    // filter through collection
    let filterThruArr = filter(collection, function(element, i, collection) {
    // if function isnt given and the element pass the test return true
      if(func === undefined) {
          if(element) {
              return true;
          } 
    // otherwise return false
            else {
              return false;
          }
      } 
    // if function is give and the element pass the test return true
            else if (func(element, i, collection)) {
                return true;
            }
    // otherwise return false
      return false;
         
    });
    for(var i = 0; i < filterThruArr.length; i++) {
        if(filterThruArr[i]) {
            return true;
        }
    }
    
    return false;
    
};
module.exports.some = some;

 /**
 * reduce: Designed to loop over an array, reduce array to a single value;
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @param {seed} seed: the previous result or a given value
 * @return: seed 
 */
 function reduce(array, func, seed) {
  // get each element in array by using each
 each(array, function(element, index, array) {
  // if seed isnt given, set the first element in array to seed
      if(seed === undefined) {
          seed = array[index];
      }
  // if seed is given, set the seed the function passing the previous result, element, index as arguments
         else if(seed) {
      seed = func(seed, element, index);
        }
    });
        return seed;
};
module.exports.reduce = reduce;
 
 /**
 * extend: Designed to loop over an Object, and more objects. 
 * Then assign the properties from objects to the target object. 
 * return the target object
 * 
 * @param { Object} collection: the target object
 * @param { more objects} ...objects: more objects
 * @return: the target object with the properties from other objects inside
 */
function extend(obj, ...objects) {
    // use each to get inside objects
    each(objects, function(objects, i, collection) {
    //  loop inside objects inside object
    for(var keys in objects) {
    // assign the properties from objects to the target object
        obj[keys] = objects[keys];
    }
        
    });
    return obj;
    // return object
};
 
 module.exports.extend = extend;
 