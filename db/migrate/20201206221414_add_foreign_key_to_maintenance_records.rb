class AddForeignKeyToMaintenanceRecords < ActiveRecord::Migration[6.0]
  def change
    add_reference :maintenance_records, :car, foreign_key: { to_table: :cars }
  end
end
