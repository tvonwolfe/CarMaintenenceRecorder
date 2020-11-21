class RemoveEngineCodeFromCar < ActiveRecord::Migration[5.2]
  def change
    remove_column :cars, :engine_code
  end
end
