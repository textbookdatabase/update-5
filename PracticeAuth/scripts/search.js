// search
//function searchFunction(){
	
  const search = document.querySelector('#search_button');
  search.addEventListener('click', (e) => {
    e.preventDefault();
  
    var ref = db.collection("bookstest");
    const searchBar = document.getElementById('bar_for_searching');
    var barText = searchBar.value;
    let html2 = '';
    db.collection('bookstest').where('title','==',barText).get().then((snapshot)=>{
      snapshot.docs.forEach(doc => {
        const li2 = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${doc.data().title} </div>
            <div class="collapsible-body white"> ${doc.data().author} </div>
            <div class="collapsible-body white"> ${doc.data().ISBN} </div>
            <div class="collapsible-body white"> ${doc.data().Term} </div>
          </li>
        `;
      html2 += li2;
      })
      bookList.innerHTML = html2;
    });
     db.collection('bookstest').where('author','==',barText).get().then((snapshot)=>{
      snapshot.docs.forEach(doc => {
        const li2 = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${doc.data().title} </div>
            <div class="collapsible-body white"> ${doc.data().author} </div>
            <div class="collapsible-body white"> ${doc.data().ISBN} </div>
            <div class="collapsible-body white"> ${doc.data().Term} </div>
          </li>
        `;
      html2 += li2;
      })
      bookList.innerHTML = html2;
    });
   db.collection('bookstest').where('ISBN','==',barText).get().then((snapshot)=>{
      snapshot.docs.forEach(doc => {
        const li2 = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${doc.data().title} </div>
            <div class="collapsible-body white"> ${doc.data().author} </div>
            <div class="collapsible-body white"> ${doc.data().ISBN} </div>
            <div class="collapsible-body white"> ${doc.data().Term} </div>
          </li>
        `;
      html2 += li2;
      })
      bookList.innerHTML = html2;
    });
     db.collection('bookstest').where('Term','==',barText).get().then((snapshot)=>{
      snapshot.docs.forEach(doc => {
        const li2 = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${doc.data().title} </div>
            <div class="collapsible-body white"> ${doc.data().author} </div>
            <div class="collapsible-body white"> ${doc.data().ISBN} </div>
            <div class="collapsible-body white"> ${doc.data().Term} </div>
          </li>
        `;
      html2 += li2;
      })
      bookList.innerHTML = html2;
    });
   
  });

  // Advanced Search Functionality

  
    