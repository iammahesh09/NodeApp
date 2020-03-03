const books = [
    {
        "id": 1,
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "id": 2,
        "author": "Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    }, {
        "id": 3,
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    }
];
const booksController = {

    getAllBooks: function (req, res) {
        res.status(200); // Ok
        res.json(books);
    },

    getBookId: function (req, res) {
        var bookId = req.params.id
        var bookData;
        books.forEach((book) => {
            if (book.id == bookId) {
                bookData = book
            }
        });
        if (bookData) {
            res.status(200); // Ok
            res.json(bookData);
        } else {
            res.status(404); // Not Found
            res.send(`Data is Not Found`);
        }
    },

    saveBook: function (req, res, next) {
        books.push(req.body);
        console.log(req.body);
        res.status(201); // Created
        res.send(req.body);
    },

    removeBook: function (req, res) {
        let bookId = req.params.id;
        console.log(bookId);

        books.forEach((book, index) => {
            if (book.id == bookId) {
                books.splice(index, 1);
                res.send(`Book ${book.id} is deleted`)
            }
        })
    },

    updateBook: function (req, res) {
        let updateBook = req.body;
        let bId = +req.params.id;
        books.forEach((book, index) => {
            if (book.id === bId) {
                book.author = updateBook.author;
                book.country = updateBook.country;
                book.imageLink = updateBook.imageLink;
                book.author = updateBook.author;
                book.language = updateBook.language;
                book.link = updateBook.link;
                book.author = updateBook.author;
                book.pages = updateBook.pages;
                book.title = updateBook.title;
                book.year = updateBook.year;
            }
        });
        res.status(204); // Created
        res.send(req.body);
    }

};


module.exports = booksController;