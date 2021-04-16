Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'cars/index'
      post 'cars/create'
      get 'cars/:vin', to: 'cars#show'
      delete 'cars/destroy/:vin', to: 'cars#destroy'

      get 'records/:id', to: 'records#show'
      get 'records', to: 'records#all_for_vin'
      post 'records/create', to: 'records#create'
      delete 'records/destroy/:id', to: 'records#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
