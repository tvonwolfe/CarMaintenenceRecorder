class Api::V1::CarsController < ApplicationController
  def index
    cars = Car.all.order(created_at: :desc)
    render json: cars
  end

  def create
    car = Car.create!(car_params)
    if car
      render json: car
    else
      render json: car.errors
    end
  end

  def show
    if car 
      render json: car
    else
      render json: car.errors
    end
  end

  def destroy
    recipe&.destroy
    render json: { message: 'Car deleted!' }
  end

  private

  def car_params
    params.permit(:vin, :year, :make, :model, :trim, :engine_displacement, :num_cylinders, :drive_type, :transmission)
  end

  def car 
    @car ||= Car.find(params[:id])
  end
end

