class RemoveColumnFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :data
  end
end
