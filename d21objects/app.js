"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthors, findIDs, addBook }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}
/**
 * @param {array} library - array with all the books in the library
 * @return {object} - array holding all titles in alphabetical order
 */
function findTitles() {
    let titles = [];
    for (let element of library) {
        titles.push(element.title);
    }

    // implement this and other functions
    return titles;
}

/**
 * @param {string} title - new book title
 * @param {string} author - the author of the newly added book
 * @param {number} libraryId - library ID of the new book
 * @returns {object} newly created book object
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook(title, author, libraryID) {
    title = document.getElementById("title").value; //retrieves the book title from the title textbox
    //finish the implementation -- get the author, create a book object, and add to the library array
    author = document.getElementById("author").value;
    libraryID = document.getElementById("libraryid").value;

    let newBook = { title: title, author: author, libraryID: libraryID };
    library.push(newBook);
    return newBook;
}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showAuthors() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const authors = findAuthors();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    authors.sort();
    const authorsString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorsString;
}
/**
 * 
 * @param {array} library - array with all of the books in the library
 * @returns {array} - array holding all authors in alphabetical order
 */
function findAuthors() {
    let authors = [];
    for (let element of library) {
        authors.push(element.author);
    }

    // implement this and other functions
    return authors;
}


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showIDs() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const libraryID = findIDs();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */

    libraryID.sort((a, b) => a - b);
    let libraryidString = libraryID.join("\n");
    // const authorsString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = libraryidString;
}
/**
 * 
 * @param {array} library - array with all of the books in the library
 * @returns {array} - array holding all books ids in alphabetical order
 */
function findIDs() {
    let libraryID = [];
    for (let element of library) {
        libraryID.push(element.libraryID);
    }
    return libraryID;
}

/**
 * @return {string} - all title with the wors sorted by length
 */
function scramble() {
    let titles = [];
    for (let element of library) {
        titles.push(element.title);
    }
}