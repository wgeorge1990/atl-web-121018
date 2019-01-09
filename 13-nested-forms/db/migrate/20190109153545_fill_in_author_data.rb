class FillInAuthorData < ActiveRecord::Migration[5.2]
  def change
    Book.all.each do |book|
      # Didn't do Author.create(name: book.author)
      author = Author.find_or_create_by(name: book.author)
      # Alternately could do...
      # book.author_id = author.id
      # book.save
      book.update(author_id: author.id)
    end
  end
end
