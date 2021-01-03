class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :vin, null: false
      t.string :make, null: false
      t.string :model, null: false
      t.float :engine_displacement, null: false
      t.integer :num_cyl, null: false
      t.string :drive_type, null: false
      t.string :transmission, null: false
      t.integer :year, null: false

      t.timestamps
    end

    add_index :cars, :vin, unique: true
  end
end
