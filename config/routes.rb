Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'cars/index'
      post 'cars/create'
      get 'cars/show/:id', to: 'cars#show'
      delete 'cars/destroy/:id', to: 'cars#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
