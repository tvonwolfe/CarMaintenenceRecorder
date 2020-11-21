class AddTrimToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :trim, :string
  end
end
