class Api::V1::RecordsController < ApplicationController
  def create
    if car
      @record = car.maintenance_records.create!(record_params.except(:vin))
    else
      render json: @record.errors
    end

    render json: @record
  end

  def show
    if record 
      render json: @record
    end
  end

  def all_for_vin
    if params[:vin].present?
      if car
        records = MaintenanceRecord.joins(:car).where(cars: { id: car.id }).order(created_at: :desc)
        render json: records
      end
    else
      render json: { error: "Need a VIN to lookup" }
    end
  end

  def destroy
    record&.destroy
    render json: { message: 'Success' }
  end

  private 

  def car
    @car = Car.find_by(vin: params[:vin])
  end

  def record
    @record = MaintenanceRecord.find(params[:id])
  end
  
  def record_params
    params.require(:record).permit(:mileage, :date_performed, :title, :description, :cost, :vin)
  end
end
