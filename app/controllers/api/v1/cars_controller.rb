class Api::V1::CarsController < ApplicationController
  def index
    cars = Car.all.order(created_at: :desc)

    render json: cars
  end

  def create
    car = Car.create!(car_params)

    if car
      render json: @car
    else
      render json: car.errors
    end
  end

  def show
    if car
      render json: @car
    else
      render json: car.errors
    end
  end

  def destroy
    car&.destroy
    render json: { message: 'Car deleted.' }
  end

  private 

  def car_params
    params.permit(:vin, :make, :model, :year, :num_cyl, :engine_displacement, :drive_type, :transmission)
  end

  def car
    @car = Car.find_by(vin: params[:vin])
  end
end
