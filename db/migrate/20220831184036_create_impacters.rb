class CreateImpacters < ActiveRecord::Migration[7.0]
  def change
    create_table :impacters do |t|

      t.timestamps
    end
  end
end
