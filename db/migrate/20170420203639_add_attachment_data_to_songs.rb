class AddAttachmentDataToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :data
    end
  end

  def self.down
    remove_attachment :songs, :data
  end
end
