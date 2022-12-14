Rails.application.routes.draw do
  resources :impacter_past_events
  resources :past_events
  resources :carescapes
  resources :events
  resources :requests
  resources :impacter_events
  post "/signup", to: "users#create"
  get "/me", to: "users#authenticateuser"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "/impacterevents/:id", to: "impacters#events"
  get "/impacters", to: "impacters#index"

  patch "/requestpatch/:id", to: "requests#userpatch"

  resources :posts
  resources :users
  

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
