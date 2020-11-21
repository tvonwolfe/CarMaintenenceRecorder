class Car < ApplicationRecord
  validates :vin, presence: true
end
