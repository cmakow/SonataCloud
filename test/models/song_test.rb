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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
