class AddLocationToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :location, :string
    remove_column :users, :header_image_url
  end
end
