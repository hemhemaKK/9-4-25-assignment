function Book(title, author){
    return{
        title,
        author,
        details: function(){
            console.log(`Title : ${this.title}, Author : ${this.author}`)
        }

    }
}
function createLibrary(){
   var books = []
   return {
       addBook(book){
           books.push(book)
       },
   removeBook(title){
       for(let i=0;i<books.length;i++){
                if(books[i].title === title){
                    books.splice(i,1)
                    return
                }
            }
            console.log(`${title}: Not Found`)
        },
        listBooks(){
            if(books.length == 0){
                console.log("No Books in Library")
            }
            else{
                books.forEach(book =>book.details())
            }
        }

   }
}


const library = createLibrary();
const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);
library.listBooks();
library.removeBook("1984");
library.listBooks();
