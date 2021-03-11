class RemoveEngineInfoFromCarsModel < ActiveRecord::Migration[6.0]
  def change
    remove_column :cars, :engine_displacement
    remove_column :cars, :num_cyl
  end
end
