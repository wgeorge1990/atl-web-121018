class AuthorsController < Sinatra::Base
  set :views, 'app/views/authors'

  def initialize(app)
    super(app)
    puts ">>> Creating a new AuthorsController\n\n#{self}\n\n"
  end

  get '/authors' do
    @authors = Author.all
    erb :index
  end

  get '/authors/new' do
    erb :new
  end

  get '/authors/:id' do
    @author = Author.find(params['id'])
    erb :show
  end

  post '/authors' do
    author = Author.create(name: params['name'])
    params['books'].each do |bok|
      Book.create(title: bok['title'],
                  snippet: bok['snippet'],
                  author_id: author.id)
    end
    redirect "/authors/#{author.id}"
  end
end
