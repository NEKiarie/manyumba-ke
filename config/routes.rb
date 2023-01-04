Rails.application.routes.draw do
  resources :payments
  resources :listed_properties
  resources :complains
  resources :bought_properties
  resources :properties
  resources :profiles
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
