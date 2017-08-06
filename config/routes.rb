Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  resources :products do
  	collection do
  		get :pricerange
  	end
  end
  resources :categories, only: [:index]
  root to: "products#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
