'use strict';

const { HashMap } =  require('./HashMap');

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  const lor = new HashMap();
  const data = [{'Hobbit': 'Bilbo'}, {'Hobbit': 'Frodo'},
    {'Wizard': 'Gandolf'}, {'Human': 'Aragon'}, {'Elf': 'Legolas'}, {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'}, {'RingBearer': 'Gollum'}, {'LadyOfLight': 'Galadriel'}, {'HalfElven': 'Arwen'},
    {'Ent': 'Treebeard'}];
  data.forEach(obj => {
    const key = Object.keys(obj)[0];
    lor.set(key, obj[key]);
  });

  // console.log(lor);
  //Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?
  //There are 11 items, but length is 9. 2 items are missing because there are 2 items with the same key value ('Hobbit', 'Maiar')

  //Retrieve the value that is hashed in the key "Maiar" and Hobbit.
  console.log(lor.get('Maiar'));
  console.log(lor.get('Hobbit'));
  //What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
  // we are returning Sauron and Frodo because we have 2 keys storing 2 different values and its only showing the latter value due to not resolving collisions

  // What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
  console.log(lor._capacity);
  // capacity = 24 
  // we go over our capacity load ratio (50%) of 8 and we have to multiply that by our size_ratio value of 3 and thats how we get 24.
}

// main();



// 2. WhatDoesThisDo

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// WhatDoesThisDo();
// expected = map1 = 20, map2 = 10


// this function is going to create collisions, so duplicate keys will overwrite previous data values


// 3. Demonstrate understanding of Hash maps

// 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length m = 11 using open addressing and a hash function k mod m.

// [22, 88, null, null, 4, 15, 28, 17, 59, 31, 10]

// 2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

// [null, [28, 19, 10], 20, 12, null, 5, [15, 33], null, 17]


// Drill #4: Remove duplicates:

function removeDuplicates(str) {
  const map = new HashMap();
  let newStr = '';
  str.split('').forEach(letter => {
    try {
      map.get(letter);
    } catch(err) {
      map.set(letter, '');
      newStr += letter;
    }
  });
  return newStr;
}

console.log(removeDuplicates('google all that you think can think of'));