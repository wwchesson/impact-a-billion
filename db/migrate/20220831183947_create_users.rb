class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :type
      t.string :name
      t.string :email
      t.integer :zip
      t.text :skillls
      t.string :availability
      t.integer :travel_radius
      t.integer :token_points
      t.string :org_name
      t.boolean :admin

      t.timestamps
    end
  end
end
