class ChangeColumnNameImpacterEvent < ActiveRecord::Migration[7.0]
  def change
    rename_column :impacter_events, :user_id, :impacter_id
  end
end
