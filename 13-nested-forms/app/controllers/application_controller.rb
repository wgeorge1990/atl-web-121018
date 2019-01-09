class ApplicationController < Sinatra::Base
  set :views, "app/views"

  get '/' do
    "hello world"
  end

  get '/about' do
    erb :about
  end
end
