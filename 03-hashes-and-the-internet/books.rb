# puts "from books.rb"


def search_books(search_term)
  response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"
  response_hash = JSON.parse(response.body)

  response_hash["items"].each do |book|
    puts "Title: #{book["volumeInfo"]["title"]}"
  end
end
