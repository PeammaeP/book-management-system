let Books = [];

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//constructor of book
function TheBookInLibrary(name,category,author,year,price) {
   this.name = name;
   this.category = category;
   this.author = author;
   this.year = year;
   this.price = price;
}

function AddBook() {
    console.log("\n=== Welcome to AddBook Function ===\n");
    rl.question('Enter The Name of Book : ', (name) => {
    rl.question('Enter The Category of Book : ', (category) => {
    rl.question('Enter The Author of Book : ', (author) => {
    rl.question('Enter The Year of Book : ', (year) => {
    rl.question('Enter The Price of Book : ', (price) => {
    
        if (name !== "" && category !== "" && author !== "") {
            let newBook = new TheBookInLibrary(name, category, author, year, price);
            Books.push(newBook);
            console.log("Book Added Successfully!\n");
        } 
        else {
            console.log("Invalid Input ! Please fill in All required fields.");
        }
            return main();
    });
    });
    });
    });
    });
  }

function ViewAllBooks() {
    let isEmpty = true;

    Books.forEach(function(book,index) {
        if(Object.keys(Books).length > 0) { 
            isEmpty = false;
            console.log(index,book); 
        }
    });

    if(isEmpty) console.log("Currently, No Book Here !! \n");
    return main();
}

function ViewSpecificBook() {
    let isFound = false;

    rl.question('Enter The Name of the book you want to : ', (nameFind) => {
      Books.forEach(function (book, index) {
        if (book.name === nameFind) {
          console.log(`Book found at theIndex ${index}:`);
          console.log(book);
          isFound = true;
        }
      });
  
      if (!isFound) {
        console.log(`There is no the book with "${nameFind}" found.\n`);
      }
      return main();
    });
}

function EditBook() {
    let isFindBook = false;
    
    rl.question('Enter the Name of the book you want to edit: ', (name_edit) => {
      Books.forEach(function (book, index) {
        if (book.name === name_edit) {
          // Book with matching title found, let's edit it
          isFindBook = true;

        rl.question('Enter the new title: ', (new_name) => {
        rl.question('Enter the new category: ', (new_Category) => {
        rl.question('Enter the new author: ', (new_Author) => {
        rl.question('Enter the new year: ', (new_Year) => {
        rl.question('Enter the new price: ', (new_Price) => {

            let updatedBook = {
                name: new_name,
                category: new_Category,
                author: new_Author,
                year: new_Year,
                price: new_Price
            };

            Books.splice(index, 1, updatedBook);
            console.log(`Book "${new_name}" Has Been Updated !!!`);
            return main();
           });
           });
           });
           });
           });
          }
        });
      if (!isFindBook) {
        console.log(`No book with the title "${name_edit}" found.`);
        return main();
      }
   });
}
  

function DeleteBook() {
    let isFindBook = false;

    rl.question('Enter the title of the book you want to delete: ', (name_delete) => {

      Books.forEach(function (book, index) {
        if (book.name === name_delete) {
          isFindBook = true;
          Books.splice(index, 1);
          
          console.log(`Book "${name_delete}" has been deleted.\n`);
          return main();
        }
      });

      if (!isFindBook) {
        console.log(`No book with the title "${name_delete}" found.`);
        return main();
      }
    });
  }
  
 
function Display() {
    console.log("===== WELCOME TO THE WONDERLUST LIBRARY =====\n");
    console.log("===== The System of this Library =====\n");
    console.log("1) View All / Specific List of Books \n");
    console.log("2) Add The Book to the Library \n");
    console.log("3) Editing Your Book in the Library\n"); 
    console.log("4) Remove Your Book in the Library\n");
    console.log("5) Press 0 to exit\n"); 
}

function ViewBook_Display() {
    console.log("\n=== What is Your Choice ? ===\n")
    console.log("1) View All the List of Books\n");
    console.log("2) View The Specific of Book\n");
}

function main() {

   let choice = '0';
   do{
   Display();

    rl.question('Enter your choice: ', (choice) => {

    switch(choice) {

    case '1': 
     ViewBook_Display(); 

     rl.question('Enter your choice: ' , (v_choice) => {  
       if(v_choice === '1') ViewAllBooks();
       else if(v_choice === '2') ViewSpecificBook();
       else console.log("Invalid Choice , Please Try Again !!!\n"); 
     });

     break;

    case '2': AddBook();
     break;

    case '3': EditBook();
     break;

    case '4': DeleteBook();
     break;

    case '0': 
    console.log("\n=== Have a great day, See you in the next time ! ===\n");
    rl.close(); 
    break;

    default: console.log("Invalid Input !! Please Try Again\n");
    return main();
   } });

  }while(choice !== '0');
}

main();


