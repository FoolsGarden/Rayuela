get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/game' do

  @user_1 = Player.create(name: params[:user_1])
  @user_2 = Player.create(name: params[:user_2])
  
   if @user_1.save && @user_2.save
    erb :game
  else 
    erb :index
  end

end

