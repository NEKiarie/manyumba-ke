Rails.application.routes.draw do
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
end
