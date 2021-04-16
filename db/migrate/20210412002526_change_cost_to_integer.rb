class ChangeCostToInteger < ActiveRecord::Migration[6.0]
  def change
    change_column :maintenance_records, :cost, :integer
  end
end
