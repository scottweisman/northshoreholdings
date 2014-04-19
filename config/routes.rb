Rails.application.routes.draw do

  root 'pages#home'
  get '/about' => 'pages#about'
  get '/apply' => 'pages#apply'
  get '/contact' => 'pages#contact'

end
