# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  song_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :song, :author, :body, presence: true

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :song,
    class_name: 'Song',
    primary_key: :id,
    foreign_key: :song_id
end
