class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      token = JWT.encode({ userId: @user.id }, ENV['SECRET'])
      render json: { token: token, name: @user.name }, status: :ok
    else
      render json: { error: 'Could not log you in.' }, status: :unauthorized
    end
  end

end
