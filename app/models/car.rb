class Car < ApplicationRecord
  validates :make, presence: true
  validates :model, presence: true
  validates :year, numericality: { only_integer: true }
  validates :num_cyl, numericality: { only_integer: true }
  validates :engine_displacement, numericality: true
  validates :drive_type, inclusion: { in: %w(4WD AWD FWD RWD), message: "%{value} is not a valid drive type." }
  validates :transmission, inclusion: { in: %w(Standard Automatic), message: "Transmission type must be Standard or Automatic." }
  validates :action_controller
end
