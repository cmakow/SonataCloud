# == Schema Information
#
# Table name: songs
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  artist_id         :integer          not null
#  album_id          :integer
#  cover_art         :string
#  track_num         :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  data_file_name    :string
#  data_content_type :string
#  data_file_size    :integer
#  data_updated_at   :datetime
#

class Song < ApplicationRecord
  validates :title, :data, :artist, presence: true

  has_attached_file :data
  validates_attachment_content_type :data, content_type: ['audio/mp3', 'audio/mpeg']

  belongs_to :artist,
    class_name: 'User',
    foreign_key: :artist_id,
    primary_key: :id

end
