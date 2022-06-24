// 5ая глава

// 5.2


// let a = prompt("Введите первое число", "");
// let b = prompt("Введите второе число", "");

// alert( +a + +b );




// function readNumber() {
//     let numb;
  
//     do {
//       numb = prompt("Введите число", 0);
//     } while ( !isFinite(numb) );
  
//     if (numb === null || numb === '') return null;
  
//     return numb;
//   }
  
//   alert(`Число: ${readNumber()}`);



//   function random(min, max) {
//     return min + Math.random() * (max - min);
//   }
  
//   alert( random(1, 5) );
//   alert( random(1, 5) );
//   alert( random(1, 5) );






//   function randomInteger(min, max){
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rand);
//   }

// alert( randomInteger(1, 5) ); 
// alert( randomInteger(1, 5) ); 
// alert( randomInteger(1, 5) );








// 5.3


function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}


alert(ucFirst("fucsdcdscsdcf"))




function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }




  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }




  function extractCurrencyValue(str) {
    return +str.slice(1);
  }








//   5.4




let styles  = ["Джаз", "Блюза"];

styles.push("Рок-н-ролл");

styles[Math.floor((styles.length - 1) / 2)] = "Классика";

alert( styles.shift() );

styles.unshift("Рэп", "Регги");






function sumInput() {

let numbers = [];
  
while (true) {
  
let value = prompt("Введите число", 0);
   if (value === "" || value === null || !isFinite(value)) break;
  
   numbers.push(+value);
 }
  
let sum = 0;
   for (let number of numbers) {
     sum += number;
   }
   return sum;
  }
  

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
  }




//   5.5


function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  }




function filterRange(arr, a, b) {
    
    return arr.filter(item => (a <= item && item <= b));
  }
  
let arr = [5, 3, 8, 1];
  
let filtered = filterRange(arr, 1, 4);





function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
   
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
let arr = [5, 3, 8, 1];
  
filterRangeInPlace(arr, 1, 4);







let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);







function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
  alert( sorted );
  alert( arr );




function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }




let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names );



let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
        }
    )
);








function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }
  
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
  
let arr = [ vasya, petya, masha ];
  
sortByAge(arr);








function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
  
let arr = [ vasya, petya, masha ];
  






function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
alert( unique(strings) );













// 5.7


function unique(arr) {
    return Array.from(new Set(arr));
  }











function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
  }
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];













