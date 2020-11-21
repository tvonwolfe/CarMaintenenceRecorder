class AddEngineTransDriveToCar < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :engine_code, :string
    add_column :cars, :num_cylinders, :integer
    add_column :cars, :engine_displacement, :float
    add_column :cars, :transmission, :string
    add_column :cars, :drive_type, :string
  end
end
