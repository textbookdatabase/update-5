/*Adapted from the Net Ninja https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg*/

// DOM elements
const bookList = document.querySelector('.books');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    // account info
    const html = `
      <div>Logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = html;
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

// setup books
const setupBooks = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const book = doc.data();
      const li = `
        <li class="border">
          <div class="collapsible-header grey lighten-4"><b>Title:</b>&emsp; ${book.title}
          </div>
          <div class="collapsible-body white"><b>Author:</b> ${book.author}</div>
          <div class="collapsible-body white"><b>ISBN: </b> ${book.ISBN}</div>
          <div class="collapsible-body white"><b>Term: </b> ${book.Term}</div>
			
        </li>
      `;
      html += li;
    });
    bookList.innerHTML = html
  } else {
    bookList.innerHTML = '<h5 class="center-align" style="color: white;">Log In for Advanced Search</h5>';
  } 

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
