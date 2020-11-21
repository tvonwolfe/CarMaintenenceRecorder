class CreateMaintenanceRecords < ActiveRecord::Migration[5.2]
  def change
    create_table :maintenance_records do |t|
      t.string :summary
      t.text :description
      t.date :date_performed
      t.decimal :cost
      t.integer :mileage

      t.timestamps
    end
  end
end
