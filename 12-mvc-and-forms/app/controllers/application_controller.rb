class ApplicationController < Sinatra::Base
  set :views, "app/views"

  get '/' do
    @books = Book.all
    erb :index
  end

  get '/about' do
    erb :about
  end
end
