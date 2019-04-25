//loop through all docs in database and use if statements to match each field 

const advForm = document.querySelector('#advanced-form');
advForm.addEventListener('submit', (e) => {
    e.preventDefault();

	
const title = advForm['title'].value;

const author = advForm['author'].value;

const ISBN = advForm['ISBN'].value;

const term = advForm['Term'].value;

let html2 = '';

db.collection('bookstest').onSnapshot(snapshot => {
    snapshot.docs.forEach(doc => {
		
      const book = doc.data();
	 
          if(book.title===title){
			
            if(book.ISBN===ISBN){
				
                if(book.author===author){
					
                    if(book.Term===term){
						
                       const li2 = `
						<li>
                            <div class="collapsible-header grey lighten-4"> ${doc.data().title}
                            <input type="button" class="d-block mr-0 ml-auto btn btn-secondary" value="Edit"> 
                            &emsp;<button>&emsp;<i class="fa fa-trash-o"></i></button>
                             </div>
							<div class="collapsible-body white"> ${doc.data().author} </div>
							<div class="collapsible-body white"> ${doc.data().ISBN} </div>
							<div class="collapsible-body white"> ${doc.data().Term} </div>
						</li>
						`;
					html2 += li2;
					bookList.innerHTML = html2;
                    }
                }
            }
}
        

      });//end of forEach
});

	  
  });//end of entire shabang