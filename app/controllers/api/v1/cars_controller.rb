class Api::V1::CarsController < ApplicationController
  def index
    cars = Car.all.order(created_at: :desc)

    render json: cars
  end

  def create
    req_headers = request.headers.env.select do |k, _|
      k.downcase.start_with?('http') ||
      k.in?(ActionDispatch::Http::Headers::CGI_VARIABLES)
    end
    puts req_headers
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
    if car
      MaintenanceRecord.where(car_id: car.id).destroy_all
      car&.destroy
      render json: { message: 'Success' }
    else
      render json: { message: 'Not found' }, status: :not_found
    end
  end

  private 

  def car_params
    params.permit(:vin, :make, :model, :year, :drive_type, :transmission)
  end

  def car
    @car = Car.find_by(vin: params[:vin])
  end
end
