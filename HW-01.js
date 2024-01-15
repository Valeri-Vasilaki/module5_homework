let arr = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']])

arr.forEach(function(item, index, array) {

   console.log("Ключ — "+index+", значение — "+item)

});