Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, default: { format: :json } do
    resources :users, only: [:create] do
      resources :songs, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :create, :destroy, :update, :show]
  end
end
