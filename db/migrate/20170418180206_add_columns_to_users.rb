class AddColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :image_url, :string
    add_column :users, :bio, :text
  end
end
