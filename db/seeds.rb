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

Song.create([
  { title: 'Wankwinkel - Garden Song', artist_id: User.last.id, data: 'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/016/original/Garden_Song.mp3'},
  { title: 'Fixing a Hole (Colorful Mix)', artist_id: User.first.id, data: 'https://s3.us-east-2.amazonaws.com/sonatacloud-dev/songs/data/000/000/011/original/Fixing_a_Hole_(Colorful_Mix).mp3'}
  ])
