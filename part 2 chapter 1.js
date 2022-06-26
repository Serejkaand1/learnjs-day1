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




