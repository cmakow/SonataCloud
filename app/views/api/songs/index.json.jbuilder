json.array! @songs do |song|
  json.id song.id
  json.title song.title
  json.artist song.artist
  json.data song.data.url
end
