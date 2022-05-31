function myEach(collection, callback){
    const newCollection =  Object.values(collection)
    for (let i = 0; i < newCollection.length; i++){
          callback(newCollection[i]);
    }
    return collection;
}
function myMap(collection, callback){
    const newCollection =  Object.values(collection);
    const array = [];
    for (let i = 0; i < newCollection.length; i++){
        array.push(callback(newCollection[i]));
    }
    return array;
}
function myReduce(collection, callback, acc){
    const newCollection =  Object.values(collection);
        for (let i = 0; i < newCollection.length; i++){
            if (acc == null) { acc = newCollection[i]; callback(acc,newCollection[i+1],newCollection) ; i++}
            acc  = callback(acc,newCollection[i],newCollection);   
        }
    return acc; 
}
function myFind(collection, predicate){
    const newCollection = Object.values(collection);
    for (let i = 0; i<newCollection.length; i++){
        if (predicate(newCollection[i]) == true){return newCollection[i]}
    }
}
function myFilter(collection, predicate){
    const newCollection = Object.values(collection);
    const array = [];
    for (let i = 0; i < newCollection.length; i++){
        if (predicate(newCollection[i]) == true){array.push(newCollection[i])}
    }
    return array;
}
function mySize(collection){
    const newCollection = Object.values(collection);
     let num = 0;
    for (let i = 0 ; i < newCollection.length ; i++){
        num ++;
    }
    return num;
}
function myFirst(array, n){
    const newArray = [];
    if (n == null){ return array[0]; }
        else{
        for (let i = 0 ; i<array[n-1] ; i++){
                newArray.push(array[i]);
             } 
             return newArray;
        }   
}
// function myLast(array, n){
//     const  newArray=[];
//     if (n == null){ return array[array.length-1];  }
//      else{
//          for (let i=0 ; i< n; i++){
//            newArray.unshift(array.pop());  
//          }
//          return newArray;
//         }
// }
function myLast(array, n){  // solution without editing the original array
    const newArray =[];
    if (n == null){ return array[array.length-1];  }
      else{
        for (let i=array.length-1 ; n!= 0; i--){
            newArray.unshift(array[i]);
            n--;
         }
           return newArray
      }
}
function myKeys(object){
    const newArray =[];
    for (let keys in object){
       newArray.push(keys)
    }
    return newArray;
}
function myValues(object){
    const newArray = [];
    for (let keys in object){
        newArray.push(object[keys])
    }
    return newArray;
}