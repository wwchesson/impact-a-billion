Rails.application.routes.draw do
  resources :carescapes
  resources :events
  resources :requests
  resources :impacter_events
  post "/signup", to: "users#create"
  get "/me", to: "users#authenticateuser"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "/impacterevents/:id", to: "impacters#events"
  # get "/useractivities/:id", to: "impacters#activities"

  resources :posts
  resources :users
  

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
