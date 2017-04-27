# json.array! @songs do |song|
#   json.id song.id
#   json.title song.title
#   json.artist song.artist
#   json.data asset_path(song.data.url)
#   json.cover_art asset_path(song.cover_art.url)
#   json.date song.created_at
#   # json.artist_img asset_path(song.artist.profile_img.url)
# end

@songs.each do |song|
  json.set! song.id do
    json.id song.id
    json.title song.title
    json.artist song.artist
    json.data asset_path(song.data.url)
    json.cover_art asset_path(song.cover_art.url)
    json.date song.created_at
  end
end
