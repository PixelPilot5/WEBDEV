let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
  this.id=crypto.randomUUID();
}


function addBookToLibrary(title,author,pages) {


  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

function displayBooks() {
  const container = document.querySelector(".card-container");
  
  container.innerHTML = ""; 

  for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i]);
  }
}


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180);
displayBooks();

function createCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
        <button>Read</button>
        <button class="delete-btn"data-id="${book.id}">Delete</button>
    `;
    document.querySelector(".card-container").appendChild(card);
}

const addBtn = document.getElementById("add-btn");
const showForm = document.querySelector(".showform");

addBtn.addEventListener("click", () => {
    showForm.style.visibility = "visible";
});

showForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const titleVal = document.getElementById("title").value;
    const authorVal = document.getElementById("author").value;
    const pagesVal = document.getElementById("pages").value;
    addBookToLibrary(titleVal,authorVal,pagesVal);
    displayBooks();
showForm.reset();
    showForm.style.visibility = "hidden";
});

const readBtn=document.querySelector(".readBtn");
const deleteBtn=document.querySelector(".delete-btn");
function deleteBook(bookId) {
  myLibrary = myLibrary.filter(book => book.id !== bookId);
  displayBooks();
}

deleteBtn.addEventListener("click",(e)=>{
    const id=deleteBtn.getAttribute("data-id");
    deleteBook(id);
})