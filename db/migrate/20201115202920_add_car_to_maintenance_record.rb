class AddCarToMaintenanceRecord < ActiveRecord::Migration[5.2]
  def change
    add_reference :maintenance_records, :cars, foreign_key: true
  end
end
