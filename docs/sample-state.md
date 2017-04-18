{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
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
      tags: { //if I get here
        1: {
          id: 1,
          name: electronic
        }
        comments: {
          1: {
            body: "Sample comment",
            user_id: 1,
            song_id: 1
          }
        }
      }
    }
  },
  liked_songs: {
    1: {
      title: "Sample song",
      data: "sample-url.com",
      artist_id: 1,
      album_id: 1,
      liker_id: 2,
      tags: { //if I get here
        1: {
          id: 1,
          name: electronic
        }
      }
      comments: {
        1: {
          body: "Sample comment",
          user_id: 1,
          song_id: 1
        }
      }
    }
  },
  listening_history: {
    1: {
      title: "Sample song",
      data: "sample-url.com",
      artist_id: 1,
      album_id: 1,
      tags: { //if I get here
        1: {
          id: 1,
          name: electronic
        }
      }
      comments: {
        1: {
          body: "Sample comment",
          user_id: 1,
          song_id: 1
        }
      }
    }
  }
}
