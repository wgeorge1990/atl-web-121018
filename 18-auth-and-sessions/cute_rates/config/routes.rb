Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/', to: 'example#testing', as: 'root'
  root to: 'example#testing'

  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy', as: 'logout'

  resources :pets, except: [:destroy]
  resources :people, only: [:show, :index, :new, :create]
end
