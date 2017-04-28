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

f = User.create({ email: 'dontenterthis@dontenterthis.com', username: 'Wankwinkel', password: 'neverfindthis', bio: 'Well hello there', location: 'New York, New York'})

Song.destroy_all

songs = [
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/016/original/Garden_Song.mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/011/original/Fixing_a_Hole_(Colorful_Mix).mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/008/original/Lido_Shuffle_(rough_mix).mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/009/original/No_Other_Than_The_Mother_Is_My_Song.mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/006/original/Klang.mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/005/Wichita+Lineman.mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/007/original/Going+To+California.mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/008/original/Within+You+Without+You+(Open+Door+Mix).mp3',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/009/original/Your+Gold+Dress.mp3'
]

cover_arts = [
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/cover_arts/Klang.jpg',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/cover_arts/Wichita+Lineman.jpg',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/cover_arts/Going+to+California.jpg',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/cover_arts/Within+You+WIthout+You.jpg',
  'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/cover_arts/Your+Gold+Dress.jpg'
]

opened_songs = []
songs.each_with_index do |song, i|
  opened_songs[i] = open(song)
end

opened_cover_arts = []
cover_arts.each_with_index do |cover_art, i|
  opened_cover_arts[i] = open(cover_art)
end

cover_art = open('https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/cover_arts/No+Other.jpg')

Song.create([
  { title: 'Garden Song', artist_id: User.last.id, data: opened_songs[0]},
  { title: 'Fixing a Hole (Colorful Mix)', artist_id: User.last.id, data: opened_songs[1]},
  { title: 'Lido Shuffle (rough mix)', artist_id: User.last.id, data: opened_songs[2]},
  { title: 'No Other Than The Mother Is My Song', artist_id: User.last.id, data: opened_songs[3], cover_art: cover_art},
  { title: 'Klang', artist_id: User.first.id, data: opened_songs[4], cover_art: opened_cover_arts[0]},
  { title: 'Wichita Lineman', artist_id: User.first.id, data: opened_songs[5], cover_art: opened_cover_arts[1]},
  { title: 'Going to California', artist_id: User.first.id, data: opened_songs[6], cover_art: opened_cover_arts[2]},
  { title: 'Within You Without You (Open Door Mix)', artist_id: User.first.id, data: opened_songs[7], cover_art: opened_cover_arts[3]},
  { title: 'Your Gold Dress', artist_id: User.first.id, data: opened_songs[8], cover_art: opened_cover_arts[4]}
  ])

Comment.destroy_all

Comment.create([
  { author_id: User.second.id, song_id: Song.first.id, body: 'Well hello'},
  { author_id: User.last.id, song_id: Song.first.id, body: 'Well hi'},
  { author_id: User.last.id, song_id: Song.second.id, body: 'HEY!'},
  { author_id: User.last.id, song_id: Song.third.id, body: 'This is a comment.'},
  { author_id: User.second.id, song_id: Song.fourth.id, body: 'Great song, bro'},
  { author_id: User.second.id, song_id: Song.fifth.id, body: 'I like this'},
  { author_id: User.first.id, song_id: Song.first.id, body: 'I like this'},
  { author_id: User.first.id, song_id: Song.second.id, body: 'I like this'},
  { author_id: User.first.id, song_id: Song.third.id, body: 'I like this'}
  ])
