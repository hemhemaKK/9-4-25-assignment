function createBook(title, author) {
  return {
    title: title,
    author: author,
    printInfo() {
      return `Book: ${this.title}, Author:${this.author}`
      }
  };
}
const book = createBook("1984", "George Orwell");
console.log(book.printInfo());