# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  data       :string           not null
#  artist_id  :integer          not null
#  album_id   :integer
#  cover_art  :string
#  track_num  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :data, :artist, presence: true

  belongs_to :artist,
    class_name: 'User',
    foreign_key: :artist_id,
    primary_key: :id

end
