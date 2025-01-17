Rails.application.routes.draw do
  
  resources :users, only: [:show] do
    resources :pledges, only:[:index, :show]
  end

  resources :users, only: [:index, :create, :destroy, :update]

  resources :startups, only: [:index, :show]

  resources :pledges, only: [:index, :create, :destroy]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  

  
end
