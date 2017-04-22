class AddAttachmentCoverArtToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :cover_art
    end
  end

  def self.down
    remove_attachment :songs, :cover_art
  end
end
