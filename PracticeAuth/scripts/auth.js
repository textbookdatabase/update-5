/*Adapted from the Net Ninja https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg*/

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    db.collection('bookstest').onSnapshot(snapshot => {
    let html = '';
    snapshot.docs.forEach(doc => {
      const book = doc.data();
      const li = `
        <li class="border">
          <div class="collapsible-header grey lighten-4"><b>Title:</b>&emsp; ${book.title}
          </div>
          <div class="collapsible-body white"><b>Author:</b> ${book.author}</div>
          <div class="collapsible-body white"><b>ISBN: </b> ${book.ISBN}</div>
          <div class="collapsible-body white"><b>Term: </b> ${book.Term}</div>
			<button class="btn btn-secondary">Edit</button>
      <button class="btn btn-secondary fa fa-trash-o"></button>
        </li>
      `;
      html += li;
    });
    bookList.innerHTML = html
    setupUI(user);
});
  } else {
    console.log('user logged out');
   db.collection('bookstest').onSnapshot(snapshot => {
    setupBooks(snapshot.docs);
    setupUI('');
});
  }
});

// add new book
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  db.collection('bookstest').add({

    title: createForm['title'].value,
    author: createForm['author'].value,
    ISBN: createForm['ISBN'].value,
    Term: createForm['Term'].value,

  }).then(() => {
    // close the create modal & reset form
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(err => {
    console.log(err.message);
  });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});
