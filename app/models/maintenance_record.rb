class MaintenanceRecord < ApplicationRecord
  validates :summary, presence: true
  validates :mileage, numericality: { only_integer: true }
  validates :date_performed, on_or_before: lambda { Date.current }
end
