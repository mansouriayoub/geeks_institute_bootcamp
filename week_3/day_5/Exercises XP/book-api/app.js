import express from "express";
import { books } from "./data.js";

const app = express();

app.use(express.json())

app.get('/api/books', (req,res)=>{
    res.json(books);
})


app.get('/api/books/:bookID', (req,res)=>{
    const id = Number(req.params.bookID)

    const book = books.find(book=>book.id===id)

    if (!book) {
        return res.status(404).json({message:'book not found'})
    }
        res.status(200).json(book)

})


app.post('/api/books', (req,res)=>{
    const { title, author, publishedYear } = req.body

    if (!title || !author || !publishedYear) {
        return res.status(400).json({message:'details required'})
    }

    const newBook = { id: books[books.length-1].id+1, title, author, publishedYear }

    books.push(newBook);
    res.status(201).json(newBook)

})

const PORT = 5000;
app.listen(PORT, ()=>console.log(`Server started at port ${PORT}`));
    




// export default app;