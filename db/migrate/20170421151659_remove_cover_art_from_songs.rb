class RemoveCoverArtFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :cover_art
  end
end
