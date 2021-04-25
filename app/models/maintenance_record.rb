class MaintenanceRecord < ApplicationRecord
  validates :mileage, numericality: { only_integer: true }
  validates :date_performed, presence: true
  validates :title, presence: true
  validates :cost, numericality: { only_integer: true }
  belongs_to :car, class_name: "Car"

  def as_json(options = {})
    super(options.merge(:except => [:car_id]))
  end
end
