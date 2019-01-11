class CutePetsController < ApplicationController
  def index
    @pets = CutePet.all
    render :index
  end

  def show
    @pet = CutePet.find(params[:id])
    render :show
  end

  def new
    render :new
  end

  def create
    @pet = CutePet.create(name: params[:name],
                          image: params[:image],
                          likes: params[:likes])
    redirect_to "/cute_pets/#{@pet.id}"
  end
end
