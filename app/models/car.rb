class Car < ApplicationRecord
  TRANSMISSION_TYPE_MANUAL = 'Standard'
  TRANSMISSION_TYPE_AUTO = 'Automatic'
  DRIVE_TYPE_4WD = '4WD'
  DRIVE_TYPE_AWD = 'AWD'
  DRIVE_TYPE_FWD = 'FWD'
  DRIVE_TYPE_RWD = 'RWD'
  validates :make, presence: true
  validates :model, presence: true
  validates :year, numericality: { only_integer: true }
  validates :num_cyl, numericality: { only_integer: true }
  validates :engine_displacement, numericality: { only_float: true }
  validates :drive_type, inclusion: { in: %W(#{DRIVE_TYPE_4WD} #{DRIVE_TYPE_AWD} #{DRIVE_TYPE_FWD} #{DRIVE_TYPE_RWD}), message: "%{value} is not a valid drive type." }
  validates :transmission, inclusion: { in: %W(#{TRANSMISSION_TYPE_AUTO} #{TRANSMISSION_TYPE_MANUAL}), message: "Transmission type must be Standard or Automatic." }
  has_many :maintenance_records, -> { order(date_performed: desc) }

  def as_json(options = {})
    super(options.merge(:except => [:id, :created_at, :updated_at]))
  end
end
