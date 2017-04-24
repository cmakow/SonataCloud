# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users

User.destroy_all

User.create([
  { email: 'demo@demo.com', username: 'demo', password: 'password' },
  { email: 'test@test.com', username: 'test', password: 'password123'},
  ])

f = User.create({ email: 'dontenterthis@dontenterthis.com', username: 'Wankwinkel', password: 'neverfindthis'})

Song.destroy_all

songs = [
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/016/original/Garden_Song.mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/011/original/Fixing_a_Hole_(Colorful_Mix).mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/008/original/Lido_Shuffle_(rough_mix).mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/009/original/No_Other_Than_The_Mother_Is_My_Song.mp3'
]

opened_songs = []
songs.each_with_index do |song, i|
  opened_songs[i] = open(song)
end

cover_art = open('https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/cover_arts/No+Other.jpg')

Song.create([
  { title: 'Garden Song', artist_id: User.last.id, data: opened_songs[0]},
  { title: 'Fixing a Hole (Colorful Mix)', artist_id: User.last.id, data: opened_songs[1]},
  { title: 'Lido Shuffle (rough mix)', artist_id: User.last.id, data: opened_songs[2]},
  { title: 'No Other Than The Mother Is My Song', artist_id: User.last.id, data: opened_songs[3], cover_art: cover_art}
  ])
