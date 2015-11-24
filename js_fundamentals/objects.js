var recipe = {title:"Mole", servings:2, ingredients:["cinnamon", "cumin", "cocoa"]};
console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients: " + recipe.ingredients);



var books = [{title:"Gone with the Wind", author:"Margaret Mitchell", alreadyRead:true}, {title:"The Book Thief", author:"Markus Zusak", alreadyRead:true}];
	return title + " by " + author;

books.forEach(function (book) {
    if (book.alreadyRead) {
        console.log("You've already read " + book.title + " by " + book.author + ".");
    } else {
        console.log("You haven't yet read " + book.title + " by " + book.author + ".");
    }
  }



var film = {title: "Titanic", duration: 210, cast: ["Leonardo DiCaprio", "Kate Winslet"]};
console.log(film.title + " lasts for " + film.duration + " minutes. Starring: " + film.cast);