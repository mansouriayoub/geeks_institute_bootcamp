const listBooksSection = document.querySelector(".listBooks");

const allBooks = [
    {
        title: "Build Your Own Web Server From Scratch In Node.JS",
        author: "James Smith",
        image: "/week_1/day_2/exercises/Exercise7_MyBookList/assets/WS.png",
        alreadyRead: true
    },
    {
        title: "JavaScript Crash Course",
        author: "Nick Morgan",
        image: "/week_1/day_2/exercises/Exercise7_MyBookList/assets/JS.png",
        alreadyRead: false
    },
    {
        title: "250+ Killer JavaScript One-Liners",
        author: "Hernando Abella",
        image: "/week_1/day_2/exercises/Exercise7_MyBookList/assets/JS1.png",
        alreadyRead: false
    },
    {
        title: "The Complete Developer: Master the Full Stack",
        author: "Martin Krause",
        image: "/week_1/day_2/exercises/Exercise7_MyBookList/assets/TCD.png",
        alreadyRead: true
    },
]


for (const book of allBooks) {
    let bookTitle = book.title;
    let bookAuthor = book.author;
    let bookImg = book.image;
    let bookAlreadyRead = book.alreadyRead;
    
    const div = document.createElement("div");
    listBooksSection.appendChild(div);
        
        
    const paragraph = document.createElement("p")
    div.appendChild(paragraph);
    
    paragraph.textContent = `${bookTitle} written by ${bookAuthor}`
    
    let bookCoverImg = document.createElement("img");
    bookCoverImg.src = bookImg;
    bookCoverImg.style.width = "100px";
    
    div.appendChild(bookCoverImg);

    if(bookAlreadyRead){
        div.style.color = "red"
    }
    

}
