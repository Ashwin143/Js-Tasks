var json = [{
    "id" : "ramu", 
    "body"   : "hello",
    "task" : 3

},
{
    "id" : "sasi", 
    "body"   : "how are you",
    "task" : 3,

}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.body);
    console.log(obj.task);

}
//for Each
json.forEach(function(obj) { console.log(obj.body); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);