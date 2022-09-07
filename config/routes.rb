Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#authenticateuser"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  resources :posts
  resources :users
  

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
