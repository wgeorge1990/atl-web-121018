class ApplicationController < Sinatra::Base
  set :views, "app/views"

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    erb :new
  end

  post '/books' do
    @book = Book.create(title: params['title'],
                        author: params['author'],
                        snippet: params['snippet'])
    redirect '/books'
  end

  get '/about' do
    erb :about
  end
end
