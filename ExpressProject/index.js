const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs")
// Example:
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.static("public"));
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res, next) => {
    let book = fs.readFileSync('public/books.json')
    const books = JSON.parse(book).books

    let data = []
    
    for (let i = 0; i < 3; i++) {
        let randomNumber =  Math.floor(Math.random() * (8 - 1) + 1);
        if (data.every(e=>books[randomNumber].title !== e.title )) {
            data.push(books[randomNumber]) 
        }else{
            i--
        }
        
    }

    const sorted = books.sort((a,b)=>{
        if(a.published > b.published){
            return -1
        }
    })

    let authors = []
    books.map(e=> authors.push(e.author))
    res.render('index', {random: data, sortedbooks: sorted, authors: authors})

});
app.get("/ejs", (req, res, next) => {
});

app.listen(port, () => {
  console.log(`${port} port deer ajillaj bn`);
});
