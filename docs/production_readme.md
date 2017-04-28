# SonataCloud

[SonataCloud live][heroku]

[heroku]: http://sonatacloud.herokuapp.com/#/

SonataCloud is a full-stack web application inspired by SoundCloud. It utilizes a Ruby on Rails backend, PostgreSQL database, and a React and Redux framework on the frontend.

## Features and Implementation

### Song Upload and Editing

  On the backend, the songs are stored in a table with columns for 'title', 'artist_id', 'created_at', 'data', and 'cover_art'. When the
feed is rendered, an API call is made to the backend to take the 15 most recently uploaded songs, as well as collecting the associated
artists. These songs are held in the state, and replaced when looking at the feed of a specific artist with that artist's 15 most
recently created songs. The index method on the back end has conditional checks for if an artist id is passed as a parameter to filter
for this.

  Songs are uploaded through the upload form - the only required attributes are the title and data, and once those two pieces have been
filled out on the form, the upload button will enable. Once the upload button has been clicked, the state is set to uploading and the
button is once again disabled to prevent duplicate uploads.

  As for editing, a user can update the cover art and title through the edit form. Both the edit and upload form have image previews.

### Continuous Song Play Between Pages

  Once a play button is hit on any of the song index items or on the song show page, an action is dispatched sending the song associated
with the play button to the state as the current_song. The song player is rendered on every page, and the current song segment of state
persists between pages allowing for navigation with the song continuing to play.

  The progress bar accesses the audio's current time and duration attributes to visually render the progress through the song, and the
volume slider accesses the audio's volume through a segment of state. A marquee tag is applied to the title and username if it is longer
than 20 characters to keep the items on the song player in the same location for each song.

### User Pages

  The users table in the backend has columns for various authentication, as well as columns for 'profile_picture' and 'header_image'.
Once a profile page is loaded, an action is dispatched to receive the profile user according to the parameter in the url and stores
this user in state. As mentioned briefly above, the feed for the user pages is done through conditionals in the index action of the song
controller. The header simply grabs information from the jbuilder view of the user and uses a series of conditionals to see if the given
attribute exists, and if it does, to render it. The header image is done through in-line styling, passing in the background image.

### Comments

  Comments are stored in the database with columns for 'author_id', 'song_id', and 'body'. The comments are included when an api
request is sent for the song so that the song page can be displayed. The comments are sorted by their index in reverse order to put the
most recent comments at the top, and the comment index is listening for new comments in order to instantly render a posted comment.
When removed, the comment is removed from the database and state simultaneously, causing the page to re-render and remove the comment
without a refresh.
