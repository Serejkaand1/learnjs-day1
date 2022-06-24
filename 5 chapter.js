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