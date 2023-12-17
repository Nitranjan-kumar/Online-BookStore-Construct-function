
//Author constructor
function Author(name,BirthYear,nationality){
    this.name = name;
    this.BirthYear = BirthYear;
    this.nationality = nationality;
}
// Book constructor
function Book(title,author,genre,price){
    this.title = title;
    this.author = author; 
    this.genre = genre;
    this.price = price;
}
//Method to get book information
Book.prototype.getBookInfo = function(){
    console.log(`Title: ${this.title}`);
    console.log(`author: ${this.author.name}`);
    console.log(`genre: ${this.genre}`);
    console.log(`price: ${this.price}`);
};
//Creating Author
const author1 = new Author("Vishnu Sharma", 1965, "Indian");
const author2 = new Author("J.k Rowling", 1980, "British");

//Creating Book
const book1 = new Book("Panchtart",author1,"Comic",30.59);
const book2 = new Book("Harry_Potter",author2,"Fantasy",45.20);

book1.getBookInfo();
book2.getBookInfo();
