class SessionsController < ApplicationController
  def new
  end

  def create
    @person = Person.find_by(username: params[:username])
    if @person && @person.authenticate(params[:password])
      session[:person_id] = @person.id
      redirect_to root_path
    else
      @error = "Login unsuccessful."
      render :new
    end
  end

  def destroy
    session[:person_id] = nil
    redirect_to root_path
  end
end
