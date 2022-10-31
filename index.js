function changeToArray(collection){
    if(Array.isArray(collection)){
        return [...collection];
    }
    else{
        return Object.values(collection);
    }
}

//Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    let newCollection = changeToArray(collection);
    for(const item of newCollection){
        callback(item);
    }
    return collection;
}

function myMap(collection, callback){
    let newCollection = changeToArray(collection);
    let newArray = [];
    for(const item of newCollection){
        const newItem = callback(item);
        newArray.push(newItem);
    }
    return newArray;
}

function myReduce(collection, callback, acc){
    let newCollection = changeToArray(collection);
    // if (acc === undefined){
    //     acc = newCollection[0];
    //     for (let i = 1; i < newCollection.length; i++){ 
    //        acc = callback(acc, newCollection[i], newCollection);
    //     }
    // }
    // else {
    //     for(const item of newCollection){
    //         acc = callback(acc, item, newCollection);
    //     }
    // }
    if(!acc){
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }
    for (let i = 0; i < newCollection.length; i++){ 
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}
myReduce([4, 8, 10], function(acc, val, collection) { return acc + val; }, 10);
//=> 32

//myReduce({one: 3, two: 6, three: 9}, function(acc, val, collection) { return acc + val; });
//=> 18

function myFind(collection, predicate){
    let newCollection = changeToArray(collection);
    for(const item of newCollection){
        if (predicate(item) === true)
        return item;
    }
}

function myFilter(collection, predicate){
    let newCollection = changeToArray(collection);
    let newArray = [];
    for(const item of newCollection){
        if (predicate(item) === true){
            newArray.push(item);
        }
    }
    return newArray;
}

function mySize(collection){
    let newCollection = changeToArray(collection);
    return newCollection.length;
}

//ARRAY FUNCTIONS
function myFirst(array, n){
    let newArray = [];
    if (n === undefined){
        return array[0];
    }
    else {
        let i = 0;
        for (const element of array) {
            if(i < n){
                newArray.push(element);
                i ++;
            }
        }
        return newArray;
    }
}

myFirst([5, 4, 3, 2, 1], 3);
//=> [5, 4, 3]

function myLast(array, n){
    let newArray = [];
    const reverseArray = array.slice().reverse();
    if (n === undefined){
        return reverseArray[0];
    }
    else {
        let i = 0;
        for (const element of reverseArray) {
            if(i < n){
                newArray.push(element);
                i ++;
            }
        }
        return newArray.reverse();
    }
}

//console.log(myLast([5, 4, 3, 2, 1]));
//=> 1

//console.log(myLast([1, 2, 3, 4], 3));
//=> [2,3,4]

//OBJECT FUNCTIONS
function myKeys(object){
    const keys = Object.keys(object);
    return keys;
}

function myValues(object){
    return changeToArray(object);
}

