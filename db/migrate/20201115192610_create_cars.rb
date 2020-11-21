class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :make, null:false
      t.string :model, null:false
      t.integer :year, null:false
      t.string :color, null:false
      t.string :vin, null:false

      t.timestamps
    end
  end
end
