# json.array! @comments do |comment|
#   json.id comment.id
#   json.author do
#     json.partial! 'api/users/user', user: comment.author
#   end
#   json.author_id comment.author.id
#   json.song comment.song
#   json.song_id comment.song.id
#   json.body comment.body
#   json.date comment.created_at
# end

@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.author do
      json.partial! 'api/users/user', user: comment.author
    end
    json.author_id comment.author_id
    json.song comment.song
    json.song_id comment.song.id
    json.body comment.body
    json.date comment.created_at
  end
end
