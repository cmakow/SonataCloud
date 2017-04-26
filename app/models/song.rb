# == Schema Information
#
# Table name: songs
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  artist_id              :integer          not null
#  album_id               :integer
#  track_num              :integer
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  data_file_name         :string
#  data_content_type      :string
#  data_file_size         :integer
#  data_updated_at        :datetime
#  cover_art_file_name    :string
#  cover_art_content_type :string
#  cover_art_file_size    :integer
#  cover_art_updated_at   :datetime
#

class Song < ApplicationRecord
  validates :title, :data, :artist, presence: true

  # include PgSearch # not sure how to utilize this
  # pg_search_scope :search_for, against: %i(title)

  has_attached_file :data
  validates_attachment_content_type :data, content_type: ['audio/mp3', 'audio/mpeg']

  has_attached_file :cover_art, default_url: "default_user.jpg"
  validates_attachment_content_type :cover_art, content_type: /\Aimage\/.*\Z/

  belongs_to :artist,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :artist_id

  has_many :comments,
    class_name: 'Comment',
    primary_key: :id,
    foreign_key: :song_id

end
