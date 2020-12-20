class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.float :engine_displacement
      t.integer :num_cyl
      t.string :drive_type
      t.string :transmission
      t.integer :year

      t.timestamps
    end
  end
end
