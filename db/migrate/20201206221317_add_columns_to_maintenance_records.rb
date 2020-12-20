class AddColumnsToMaintenanceRecords < ActiveRecord::Migration[6.0]
  def change
    add_column :maintenance_records, :title, :string
    add_column :maintenance_records, :description, :text
    add_column :maintenance_records, :date_performed, :date
    add_column :maintenance_records, :mileage, :integer
    add_column :maintenance_records, :cost, :decimal
  end
end
