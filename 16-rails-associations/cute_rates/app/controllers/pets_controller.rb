class PetsController < ApplicationController
  def index
    @pets = Pet.all
    render :index
  end

  def show
    @pet = Pet.find(params[:id])
    render :show
  end

  def new
    @pet = Pet.new
    render :new
  end

  def create
    @pet = Pet.create(pet_params)
    redirect_to pet_path(@pet.id)
    # redirect_to "/cute_pets/#{@pet.id}"
  end

  def edit
    @pet = Pet.find(params[:id])
    render :edit
  end

  def update
    @pet = Pet.find(params[:id])
    @pet.update(pet_params)
    redirect_to pet_path(@pet.id)
  end

  private
  def pet_params
    params.permit(:name, :image, :likes)
  end
end
