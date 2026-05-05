function sortStrByFisrtLetter (array){
    let result = {};
    for (let item of array){
        let key = item[0]
        console.log('key', key)
        if(!result[key]){
          result[key] =[];
        }
        result[key].push(item);
    }
    return result;
}


console.log(sortStrByFisrtLetter (["apple", "banana", "avocado", "blueberry", "cherry"]))
