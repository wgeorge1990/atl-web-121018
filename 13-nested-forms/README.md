## Mod 2 - How the hell do servers even?

### Objectives

* Pick up from yesterday by making a show/detail page for a book
* Cool, now redirect to it when we make a new book
* Cool! Ah shit, our boss wants to look at books by author. T_T
  * First, we need a new model: Author.
  * Next, we should fix books to have a relationship with authors.
    * A data preserving migration maybe?
  * Now, our boss wants to be able to see a list of books by author.
    * Add an AuthorsController!
  * Finally, he's asked to have a page where we can add an author and some of their books.

