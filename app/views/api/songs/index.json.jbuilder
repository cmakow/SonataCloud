json.array! @songs do |song|
  json.id song.id
  json.title song.title
  json.artist song.artist
  json.data song.data.url
  json.cover_art asset_path(song.cover_art.url)
end
