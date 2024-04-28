var data = '{"name":"John", "age":30}';
var obj = JSON.parse(data);
console.log(obj.name); // "John"
console.log(JSON.stringify(obj)); // "{"name":"John","age":30}"