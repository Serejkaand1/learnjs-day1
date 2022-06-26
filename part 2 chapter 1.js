// 1я глава второй части

// 1.3



// Для div
document.body.firstElementChild


// Для ul
document.body.lastElementChild



// Для li
document.body.lastElementChild.lastElementChild




let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
}














// 1.4


for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
}













// 1.6


let elem = document.querySelector('[data-widget-name]');

    alert(elem.dataset.widgetName);










let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // нет атрибута

  if (!href.includes('://')) continue; // нет протокола

  if (href.startsWith('http://internal.com')) continue; // внутренняя

  link.style.color = 'orange';
}












// 1.7


function clear(elem) {
    elem.innerHTML = '';
  }











  let ul = document.createElement('ul');
  document.body.append(ul);

  while (true) {
    let data = prompt("Введите текст для элемента списка", "");

    if (!data) {
      break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
  }









let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },

    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
  }

function createTreeText(obj) {
    let li = '';
    let ul;
    for (let key in obj) {
      li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
      ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

createTree(container, data);









let lis = document.getElementsByTagName('li');

    for (let li of lis) {
      
      let descendantsCount = li.getElementsByTagName('li').length;
      if (!descendantsCount) continue;

      li.firstChild.data += ' [' + descendantsCount + ']';
    }





function createCalendar(elem, year, month) {

let mon = month - 1; 
let d = new Date(year, mon);
  
let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
  for (let i = 0; i < getDay(d); i++) {
          table += '<td></td>';
        }
  
   
    while (d.getMonth() == mon) {
          table += '<td>' + d.getDate() + '</td>';
  
    if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
          }
  
          d.setDate(d.getDate() + 1);
        }
  

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
          }
        }
  

    table += '</tr></table>';
  
    elem.innerHTML = table;
      }
  
    function getDay(date) {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
      }
  
    createCalendar(calendar, 2012, 9);












let timerId;

function update() {
let clock = document.getElementById('clock');
let date = new Date();

let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
    }

function clockStart() {
     
      if (!timerId) {
        timerId = setInterval(update, 1000);
      }
      update(); 
    }

function clockStop() {
      clearInterval(timerId);
      timerId = null; 
    }








one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');












let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);














// 1.8

function showNotification({top = 0, right = 0, className, html}) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
      notification.classList.add(className);
    }

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
  }

  // test it
  let i = 1;
  setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello ' + i++,
      className: "welcome"
    });
  }, 2000);







// 1.9



let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;




let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';


document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);









// 1.11


let fieldCoords = field.getBoundingClientRect();

let answer = [
      [ 
        fieldCoords.left,
        fieldCoords.top
      ],
      [ 
        fieldCoords.right,
        fieldCoords.bottom
      ],
      [ 
        fieldCoords.left + field.clientLeft,
        fieldCoords.top + field.clientTop
      ],
      [ 
        fieldCoords.left + field.clientLeft + field.clientWidth,
        fieldCoords.top + field.clientTop + field.clientHeight
      ]
    ];








function positionAt(anchor, position, elem) {

let anchorCoords = anchor.getBoundingClientRect();
  
switch (position) {
    case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;
  
    case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
  
    case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
        }
  
      }
  

function showNote(anchor, position, html) {
  
let note = document.createElement('div');
        note.className = "note";
        note.innerHTML = html;
        document.body.append(note);
  
        positionAt(anchor, position, note);
      }








function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

    switch (position) {
        case "top":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
          break;

        case "right":
          elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "bottom":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
          break;
      }

    }

function showNote(anchor, position, html) {

let note = document.createElement('div');
      note.className = "note";
      note.innerHTML = html;
      document.body.append(note);

positionAt(anchor, position, note);
    }




function getCoords(elem) {
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

function showNote(anchor, position, html) {

      let note = document.createElement('div');
      note.className = "note";
      note.innerHTML = html;
      document.body.append(note);

      positionAt(anchor, position, note);
}

    function positionAt(anchor, position, elem) {

let anchorCoords = getCoords(anchor);

switch (position) {
        case "top-out":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
          break;

        case "right-out":
          elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

    case "bottom-out":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
          break;

    case "top-in":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

    case "right-in":
          elem.style.width = '150px';
          elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

    case "bottom-in":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
          break;
    }

}


let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");