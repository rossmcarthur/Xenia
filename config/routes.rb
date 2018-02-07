Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :reviews, only: [:destroy]
    resources :bookings, only: [:destroy]
    resource :session, only: [:create, :destroy, :show]
    resource :user, only: [:create, :show] do
      resources :bookings, only: [:index]
      resources :reviews, only: [:index, :create]
    end
    resources :spots, only: [:create, :index, :show, :update, :destroy] do
      resources :reviews, only: [:create, :index]
      resources :bookings, only: [:create, :index]
    end
  end

end
