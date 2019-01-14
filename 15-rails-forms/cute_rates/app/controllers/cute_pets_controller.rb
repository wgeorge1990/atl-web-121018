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
    @pet = CutePet.new
    render :new
  end

  def create
    @pet = CutePet.create(pet_params)
    redirect_to cute_pet_path(@pet.id)
    # redirect_to "/cute_pets/#{@pet.id}"
  end

  def edit
    @pet = CutePet.find(params[:id])
    render :edit
  end

  def update
    @pet = CutePet.find(params[:id])
    @pet.update(pet_params)
    redirect_to cute_pet_path(@pet.id)
  end

  private
  def pet_params
    params.permit(:name, :image, :likes)
  end
end
