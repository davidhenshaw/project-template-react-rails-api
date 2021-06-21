Rails.application.routes.draw do
  

  resources :users, only: [:show, :index, :create, :destroy]

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
end
