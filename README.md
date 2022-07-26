# movies-jacob-zach

endpoint will be https://fluoridated-changeable-unicorn.glitch.me/movies

This endpoint alone will grab ALL movies. We'll need to make diffrent fetches for genres, etc.


This will go in the router file.


        '/NEW_ROUTE_NAME_FOR_MOVIES': {
            returnView: *Movies*,
            state: {
                THE GLITCH MOVIE API: {
                    url: https://fluoridated-changeable-unicorn.glitch.me/movies
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization' : API KEY / TOKEN
                    }
                }
            }

Then we need to create the Movies.js view in the views directory.

We need a html function to create each movie "card".
Each movie card needs a delete button, so we'll need a moviesEvents function.
Onclick, should send a delete request at the ID number of whatever movie the button is attached to.

We also need a view to add movies. We'll set up an html function to create the form for a user to fill out their movie addition.
The submit button will trigger a POST request. Maybe we should allow editing here too? So a post/put?



