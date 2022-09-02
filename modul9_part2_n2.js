const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);

const list = data.list;
let array = [];

for (let i = 0; i < list.length; i++) {
  let obj = {
  name: list[i].name,
  age: Number(list[i].age),
  prof: list[i].prof,
  };
  array.push(obj)
}

let result = {
  list: array,
}

console.log(result)