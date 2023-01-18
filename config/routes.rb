Rails.application.routes.draw do
  resources :listed_properties
  resources :user_properties
  resources :buyers
  resources :property_images
  resources :faqs
  resources :payments
  resources :properties
  resources :sellers
  resources :locations
  resources :types
  resources :users
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/auth/signup", to: "users#create" 
  post "/auth/signin", to: "sessions#create"
  delete "/auth/logout", to: "sessions#destroy"

  get "/properties/sellers/:sid", to: "properties#owned_by"
 #get "/listedproperties/sellers/:sid", to: "listed_properties#owned_by"
  get "/properties/listed/:sid", to: "properties#owned_by_for_sale"
  get "/properties/sale", to: "properties#properties_all_for_sale"
end
