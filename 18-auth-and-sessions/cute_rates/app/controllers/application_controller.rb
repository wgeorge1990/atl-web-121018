class ApplicationController < ActionController::Base
  helper_method :current_user

  def authorize!
    unless current_user
      flash[:notice] = "You must be logged in to do that."
      return redirect_to pets_path
    end
  end

  def current_user
    return nil unless session[:person_id]
    @current_user ||= Person.find(session[:person_id])
  end
end
