// Упражнения из 2ой главы


// 2.1

alert("Я JavaScript!")






// // 2.4

let name;
let admin;

name = "Джон";
admin = name;


alert(admin);



let newPlanet = "Планета";
let userName = "Сергей";










//2.5


name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya






//2.6

let user = prompt("Как твое имя?", "")

alert(`Привет, ${user}`)












//2.8


let a = 1, b = 1;

let c = ++a; //2
let d = b++; //1





a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5


"" + 1 + 0  // 10
"" - 1 + 0  //  -1
true + false  // 1
6 / "3"   // 2
"2" * "3"   // 6 
4 + 5 + "px"   // 9px
"$" + 4 + 5   // $45
"4" - 2   // 2
"4px" - 2   // NAN
"  -9  " + 5   // -9 5
"  -9  " - 5   // -14
null + 1   // 1
undefined + 1   // NAN
" \t \n" - 2   // -2



a = prompt("Первое число?", 1);
b = prompt("Второе число?", 2);

alert(a + b); // 12

Исправленный вариант

alert(+a + +b);















//2.9


5 > 4   //true
"ананас" > "яблоко" //false
"2" > "12" //false
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n"  //false
















//2.10



let question = prompt("Какое «официальное» название JavaScript?", "")
if (question == "ECMAScript"){
    alert("Верно!");
} else{
    alert("Не знаете? ECMAScript!");
}




let numb = prompt ("Введите число", "")

if (numb > 0){
    alert(1);
}

else if(numb < 0){
    alert(-1);
}

else{
    alert(0);
}





result = (a + b < 4) ? 'Мало' : 'Много';






let message = 
(login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' : 
(login == '') ? 'Нет логина' : 
'';

















 //2.11


let firstName = prompt ("Кто там?", '');

if (firstName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
     alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
     alert( 'Отменено' );
  } else {
     alert( 'Неверный пароль' );
  }

} else if (firstName == '' || firstName == null) {
     alert( 'Отменено' );
} else {
     alert( "Я вас не знаю" );
}





















//2.13

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }





    let i = 0;
    while (i < 3) {
    alert( `number ${i}!` );
     i++;
}



let numb2;

do {
  numb2 = prompt("Введите число больше 100", 0);
} while (numb2 <= 100 && numb2);

let n = 10;

label:
for (let i = 2; i <= n; i++) {
    
    for (let j = 2; j < i; j++) {
    if (i % j == 0) continue label;      
      }

      alert( i );
    }























// 2.14



let browser;


if (browser = "Edge"){
    alert("You've got the Edge!");
}
else if(browser == "Edge" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
    alert("Okay we support these browsers too");
}
else{
    alert( "We hope that this page looks ok!" );
}



const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
case 0:
    alert('Вы ввели число 0');
        break;

case 1:
    alert('Вы ввели число 1');
        break;

case 2:
case 3:
    alert('Вы ввели число 2, а может и 3');
        break;
}


















// 2.15



function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }



  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }



function min (a,b){
    if (a>=b){
        return a;
    }else{
        return b;
    }
        
}



function pow (a,b){
    let result = a**b;
        return result;
}


let x = prompt("Назовите x?", '');
let n = prompt("Назовитe n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }


















// 2.17


ask(
    "Вы согласны?",
        () => alert("Вы согласились."),
        () => alert("Вы отменили выполнение.")
  );





