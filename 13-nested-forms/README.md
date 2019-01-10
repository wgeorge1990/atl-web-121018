## Mod 2 - How the hell do servers even?

### Objectives

* Recap by making an authors index page
  * Talk overall process
  * Link to it from authors show page
  * Am I able to see both instance variables?
    * initialize magic!

-- Nested forms stuff

* Cool! Ah shit, our boss wants to look at books by author. T_T
  * First, we need a new model: Author.
  * Next, we should fix books to have a relationship with authors.
    * A data preserving migration maybe?
  * Now, our boss wants to be able to see a list of books by author.
    * Add an AuthorsController!
  * Finally, he's asked to have a page where we can add an author and some of their books.
