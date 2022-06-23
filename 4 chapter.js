// Задания из 4ой главы


// 4.1


let user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

delete user.name;



function isEmpty(obj){
    for(ket in obj){
        return false;
    }
    return true;
}




let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };



let sum = 0;
       for (let key in salaries) {
                   sum += salaries[key];
}
        

alert(sum);


function multiplyNumeric(obj){
    for (let key in obj){
    if (typeof obj[key] == "number"){
        obj[key]*=2
    }
    alert(obj[key])
}
}



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };


  multiplyNumeric(menu)










// 4.4 




let calculator = {
    sum() {
      return +this.a + +this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = prompt('a?', 0);
      this.b = prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );






// 4.5





function Calculator() {

    this.read = function() {
      this.a = prompt('a?', 0);
      this.b = prompt('b?', 0);
    };
  
    this.sum = function() {
      return + this.a + + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }







  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Введите число', 0);
    };
  
  }

















  