// 6я глава 



// 6.1


function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  alert( sumTo(100) );





function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );




function sumTo(n) {
    return n * (n + 1) / 2;
  }
  
  alert( sumTo(100) );








function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(5) ); 








function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
alert( fib(3) ); 
alert( fib(7) ); 
alert( fib(77) ); 









let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
function printList(list) {
    let tmp = list;
  
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  
  };
  
  printList(list);




let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
function printList(list) {
  
    alert(list.value); 
  
    if (list.next) {
      printList(list.next); 
    }
  
  };
  
printList(list);



let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list) {
  
    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  };
  
  printReverseList(list);







  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
  };
  
  printReverseList(list);


















//   6.3




function sum(a) {

    return function(b) {
      return a + b;
    };
  
  };
  
  alert( sum(1)(2) );
  alert( sum(5)(-1) );






function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  };
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inBetween(3, 6)) );







function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  };
  
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) );














let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  
  function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  };
  
  users.sort(byField('name'));
  users.forEach(user => alert(user.name));
  
  users.sort(byField('age'));
  users.forEach(user => alert(user.name));









function makeArmy() {

    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { 
        alert( i );
      };
      shooters.push(shooter);
  
  
    }
  
    return shooters;
  };
  
  let army = makeArmy();
  
  army[0]();
  army[5]();









// 6.6

function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  };















function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  };






// 6.8


function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }




  function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }






function spy(func) {

    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, arguments);
    }
  
    wrapper.calls = [];
  
    return wrapper;
}




function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  
  }
  
let f1000 = delay(alert, 1000);








function debounce(f, ms) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };
  
}




function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }



  










