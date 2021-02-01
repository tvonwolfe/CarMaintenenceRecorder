class MaintenanceRecord < ApplicationRecord
  validates :mileage, numericality: { only_integer: true }
  validates :date_performed, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :cost, numericality: true
  belongs_to :car, class_name: "Car"
end
