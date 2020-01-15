const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add('some text');

const o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // La variable "o" referencia a otro objeto, por lo que agrega otro valor.

mySet.has(1); // true
mySet.has(1); // true
mySet.has(3); // false, 3 no ha sido añadido al Set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // Elimina 5 del Set
mySet.has(5);    // false, 5 fue eliminado

mySet.size; // 4, sólo removimos un valor
console.log(mySet);// Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}
