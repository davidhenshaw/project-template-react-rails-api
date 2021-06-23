Rails.application.routes.draw do
  

  resources :users, only: [:show, :index, :create, :destroy]

  resources :startups, only: :index
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  

  
end
