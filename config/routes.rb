Rails.application.routes.draw do
  root :to =>'admin/users#index'
  get "/admin" => "admin/users#index"

  devise_for :users, :controllers => { :sessions => "sessions",:registrations => "registrations",:passwords => "passwords",:confirmations => "confirmations" }

  namespace :admin do
    resources :users do
      collection do
        get "/user_password/:id" => "users#password"
        post "/more_user" => "users#more_user"
        post "/change_password/:id" => "users#change_password"
      end
    end
  end
  # namespace :api do
  #   namespace :v1 do
  #     resources :contents do
  #       get :get_file
  #     end
  #   end
  # end
end
