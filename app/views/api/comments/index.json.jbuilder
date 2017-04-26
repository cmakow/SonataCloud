json.array! @comments do |comment|
  json.author comment.author
  json.song comment.song
  json.body comment.body
end
