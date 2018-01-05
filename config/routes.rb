Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :spots, only: [:create, :index, :show, :update, :destroy]
    resources :reviews, only: [:create, :destroy]
  end

end
