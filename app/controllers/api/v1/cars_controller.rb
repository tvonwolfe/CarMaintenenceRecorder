class Api::V1::CarsController < ApplicationController
  def index
    car = Car.all.order(created_at: :desc)
    render json: car
  end

  def create
  end

  def show
  end

  def destroy
  end
end
