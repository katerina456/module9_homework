const parser = new  DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;


let xmlDom = parser.parseFromString(xmlString, 'text/xml');


const listNode = xmlDom.querySelector('list');

let studentNode = listNode.querySelectorAll('student');
let nameNode = listNode.querySelectorAll('name');
let firstNode = listNode.querySelectorAll('first');
let secondNode = listNode.querySelectorAll('second');
let ageNode = listNode.querySelectorAll('age');
let profNode = listNode.querySelectorAll('prof');

let array = []

for (let i = 0; i < studentNode.length; i++) {
  let obj = new Object();
  obj.name = firstNode[i].textContent + ' ' + secondNode[i].textContent;
  obj.age = Number(ageNode[i].textContent);
  obj.prof = profNode[i].textContent;
  obj.lang = nameNode[i].getAttribute('lang');
  array.push(obj);
}

let obj = new Object();

obj.list = array;

console.log(obj);