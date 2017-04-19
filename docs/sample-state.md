{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  playingSong: {
    2: {
      title: "Playing song",
      data: "playing-song-url.com",
      artist_id: 2,
      album_id: 2,
      image_url: "playing-song-image-url.com",
    }
  }
  viewingSong: {
    1: {
      title: "Sample song",
      data: "sample-url.com",
      artist_id: 1,
      album_id: 1,
      image_url: "sample-image-url.com"
      comments: {
        1: {
          user_id: 2,
          song_id: 1,
          body: "Great song!"
        }
      }
      taggings: {
        1: {
          tag_id: 1
          song_id: 1
          tag: "electronic"
        }
      }
    }
  }
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadSong: {errors: ["must be mp3 file"]}
  },
  songs: {
    1: {
      title: "Sample song",
      data: "sample-url.com",
      artist_id: 1,
      album_id: 1,
      image_url: "sample-image-url.com"
    }
  },
  playlists: {
    1: {
      title: "Cool playlist",
      user_id: 1,
      image_url: "sample-playlist-image.com"
    }
  }
  albums: {
    1: {
      title: "Best album",
      artist_id: 1,
      image_url: "sample-album-image.com"
    }
  }
}
