class BooksController < Sinatra::Base
  set :views, "app/views/books"

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    erb :new
  end

  get '/books/:id' do
    @book = Book.find(params['id'])
    puts params
    erb :show
  end

  post '/books' do
    @book = Book.create(title: params['title'],
                        author: params['author'],
                        snippet: params['snippet'])
    redirect '/books'
  end

end
