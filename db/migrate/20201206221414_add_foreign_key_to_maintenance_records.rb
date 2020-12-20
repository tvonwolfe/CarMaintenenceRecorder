class AddForeignKeyToMaintenanceRecords < ActiveRecord::Migration[6.0]
  def change
    add_reference :maintenance_records, :cars, foreign_key:true
  end
end
