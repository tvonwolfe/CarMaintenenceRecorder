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
      render json: { car: car, records: records }
    else
      render json: car.errors
    end
  end

  def destroy
    car&.destroy
    render json: { message: 'Car deleted.' }
  end

  def records
    if car 
      if records 
        render json: records 
      else
        render json: records.error 
      end 
    else
      render json: car.errors
    end
  end

  private 

  def car_params
    params.permit(:vin, :make, :model, :year, :num_cyl, :engine_displacement, :drive_type, :transmission)
  end

  def car
    @car = Car.find_by(vin: params[:vin])
  end

  def records 
    @records = MaintenanceRecord.where(cars_id: @car.id)
  end

end
