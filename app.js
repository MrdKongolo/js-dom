// const titles = document.getElementsByClassName('title');

// // console.log(Array.isArray(titles));
// // console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(title){
//   console.log(title);
// });

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//   console.log(book);
// });

  /**
   * The follow has an equivalent 
   */
// const listItems = document.querySelectorAll('#book-list ul li');

// Array.from(listItems).forEach(function(item){
//   item.addEventListener('click', (e) => {
//     const li = e.target.parentElement;   
//     li.parentNode.removeChild(li);
//   });
// });

/** Delete book-list */
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
  if(e.target.className=='delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// prevent default behaviour

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
 
  // Create elements

  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //Add Content
  deleteBtn.textContent = 'Supprimer';
  bookName.textContent = value;

  // Add Classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // Append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});


// Hide books

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = 'none';
  } else {
    list.style.display = 'initial';
  }
});

// Filter books
const search = document.forms['search-books'].querySelector('input');

search.addEventListener('keyup', function(e){

  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');

  Array.from(books).forEach(function(book) {

    const title = book.firstElementChild.textContent;

    if(title.toLowerCase().indexOf(term) != -1) {

      book.style.display = 'block';

    } else {

      book.style.display = 'none';

    }

  });

});